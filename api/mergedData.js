import { getSingleItem } from './itemData';
import getOrderItems from './orderItemsData';

const getOrderAndItems = async (orderFirebaseKey) => {
  //  GET THE SINGLE ORDER
  // eslint-disable-next-line no-undef
  const order = await getSingleOrder(orderFirebaseKey);

  // GET THE ORDERITEMS RELATED TO THE ORDER
  const orderItems = await getOrderItems(orderFirebaseKey);
  // GET THE SINGLE ITEM IN ORDER RETURNS AN ARRAY OF PROMISES
  const items = await orderItems.map((ob) => getSingleItem(ob.book_id));
  // PROMISE.ALL TO GET ALL ITEM OBJECTS
  const itemsInOrder = await Promise.all(items);
  // RETURN THE ORDER OBJECT AND THE ARRAY OF ITEMS FOUND IN ORDERITEMS
  return { ...order, items: itemsInOrder };
};

export default getOrderAndItems;
