import { getItems, getSingleItem } from './itemData';
import { deleteSingleOrder, getOrders, getSingleOrder } from './orderData';
import { deleteOrderItems, getOrderItems } from './orderItemsData';

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
  const deleteItemPromises = await orderItems.map((oiObj) => deleteOrderItems(oiObj.firebaseKey));

  await Promise.all(deleteItemPromises).then(() => deleteSingleOrder(ordersFirebaseKey));
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

// GET ITEMS NOT RELATED TO AN ORDER
const getItemsNotInTheOrder = async (orderId, uid) => {
  // GET ALL THE ITEMS
  const allItems = await getItems(uid);

  // GET ALL THE ORDERITEMS RELATES TO THE ORDER
  const orderItems = await getOrderItems(orderId);

  // GET THE ITEMS FOUND IN THE ORDERITEM, RETURNS AN ARRAY OF PROMISES
  const itemPromises = await orderItems.map((orderItem) => getSingleItem(orderItem.item_id));

  // USE PROMISE.ALL() TO RETURN EACH ITEM OBJECT
  const items = await Promise.all(itemPromises);
  // FILTER AND COMPARE USING .SOME() THE TWO ARRAYS OF ALL ITEMS AND ALL ORDERITEMS
  // IF A item IS FOUND IN ORDERITEMS THEN IT WILL NOT BE RETURN IN THIS ARRAY
  const filterItems = await allItems.filter((obj) => !items.some((e) => e.firebaseKey === obj.firebaseKey));

  // ONLY RETURN THE ITEMS NOT RELATED TO ORDER
  return filterItems;
};

// SEARCH ORDERS BY CUSTOMER NAME, PHONE, OR EMAIL
const searchOrders = async (uid, searchValue) => {
  const allOrders = await getOrders(uid);
  const filterOrders = await allOrders.filter((orders) => (
    orders.customer_name.toLowerCase().includes(searchValue)
    || orders.customer_phone.toLowerCase().includes(searchValue)
    || orders.customer_email.toLowerCase().includes(searchValue)
  ));
  return { orders: filterOrders };
};

export {
  getOrderAndItems, getASingleItemOrder, deleteOrderItemsRelationship, getItemsNotInTheOrder, searchOrders
};
