import { deleteItem, getSingleItem } from './itemData';
import { deleteSingleOrder, getSingleOrder } from './orderData';
import getOrderItems from './orderItemsData';

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

const deleteOrderItemsRelationship = async (ordersFirebaseKey) => {
  const orderItems = await getOrderItems(ordersFirebaseKey);
  const deleteItemPromises = await orderItems.map((abObj) => deleteItem(abObj.firebaseKey));

  await Promise.all(deleteItemPromises).then(() => deleteSingleOrder(ordersFirebaseKey));
};

export { getOrderAndItems, deleteOrderItemsRelationship };
