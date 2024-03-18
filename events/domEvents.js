import {
  getASingleItemOrder, getOrderAndItems, deleteOrderItemsRelationship, getItemsNotInTheOrder
} from '../api/mergedData';
import { getOrders } from '../api/orderData';
import { createOrderItems, deleteOrderItems, updateOrderItem } from '../api/orderItemsData';
import { showOrders } from '../pages/orders';
import showItemsNotInOrder from '../pages/showItemsNotInOrder';
import viewOrderItems from '../pages/viewOrderItems';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view_order_home')) {
      getOrders(uid).then((orders) => showOrders(orders, uid));
    }

    // This allows me to view the items for the order
    if (e.target.id.includes('view-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getOrderAndItems(firebaseKey).then(viewOrderItems);
    }

    // Click Event for deleting an Order
    if (e.target.id.includes('delete-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      deleteOrderItemsRelationship(firebaseKey).then(() => {
        getOrders(uid).then(showOrders);
      });
    }

    if (e.target.id.includes('delete-item-from-order-btn')) {
      console.warn('del-me!');
      // SPLIT OFF THE BOTH KEYS FROM BUTTON
      const [, itemFirebaseKey, orderFirebaseKey] = e.target.id.split('--');
      console.warn(orderFirebaseKey);

      // GET THE SINGLE ITEM ORDER SO YOU HAVE THE FIREBASEKEY
      getASingleItemOrder(orderFirebaseKey, itemFirebaseKey)

      // DELETE SINGLE ORDERITEM BY FIREBASEKEY
        .then((orderItem) => deleteOrderItems(orderItem.firebaseKey))
        .then(() => {
          // GET ORDER DETAILS AND VIEW ORDER
          getOrderAndItems(orderFirebaseKey).then(viewOrderItems);
        });
    }
    if (e.target.id.includes('show-items-not-in-order-btn')) {
      console.warn('add a item');
      const [, orderFirebaseKey] = e.target.id.split('--');
      console.warn(orderFirebaseKey);
      getItemsNotInTheOrder(orderFirebaseKey, uid).then((itemsArray) => showItemsNotInOrder(itemsArray, orderFirebaseKey));
    }
    if (e.target.id.includes('add-item-to-order-btn')) {
      console.warn('add-me');
      const [, itemFirebaseKey, orderFirebaseKey] = e.target.id.split('--');
      const payload = {
        item_id: itemFirebaseKey,
        order_id: orderFirebaseKey,
        uid
      };
      createOrderItems(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrderItem(patchPayload).then(() => {
          getItemsNotInTheOrder(orderFirebaseKey, uid).then((itemsArray) => showItemsNotInOrder(itemsArray, orderFirebaseKey));
        });
      });
    }
  });
};

export default domEvents;
