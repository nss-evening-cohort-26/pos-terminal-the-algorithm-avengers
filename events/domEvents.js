import { getASingleItemOrder, getOrderAndItems } from '../api/mergedData';
import { getOrders } from '../api/orderData';
import { deleteOrderItems } from '../api/orderItemsData';
import { showOrders } from '../pages/orders';
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
  });
};

export default domEvents;
