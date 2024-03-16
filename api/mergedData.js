import { getSingleItem } from './itemData';
import { getSingleOrder } from './orderData';
import { getOrderItems } from './orderItemsData';

const getOrderAndItems = async (orderFirebaseKey) => {
  //  GET THE SINGLE ORDER
  const order = await getSingleOrder(orderFirebaseKey);

  // GET THE ORDERITEMS RELATED TO THE ORDER
  const orderItems = await getOrderItems(orderFirebaseKey);
  // GET THE SINGLE ITEM IN ORDER RETURNS AN ARRAY OF PROMISES
  const items = await orderItems.map((ob) => getSingleItem(ob.item_id));
  // PROMISE.ALL TO GET ALL ITEM OBJECTS
  const itemsInOrder = await Promise.all(items);
  // RETURN THE ORDER OBJECT AND THE ARRAY OF ITEMS FOUND IN ORDERITEMS
  return { ...order, items: itemsInOrder };
};

// THIS IS USED TO REMOVE A ITEM FROM AN ORDER
const getASingleItemOrder = async (orderFirebaseKey, itemFirebaseKey) => {
  // GET ALL THE ORDERITEMS RELATED TO THE ORDER
  const orderItems = await getOrderItems(orderFirebaseKey);

  // FIND THE SINGLE ITEM WHERE ORDERITEM.ITEM_ID IS EQUAL TO THE ITEMFIREBASEKEY
  const singleItemInOrder = await orderItems.find((orderItem) => orderItem.item_id === itemFirebaseKey);

  // RETURN THE SINGLE ORDERITEM SO YOU CAN HAVE THE FIREBASEKEY TO DELETE
  return singleItemInOrder;
};

export { getOrderAndItems, getASingleItemOrder };
