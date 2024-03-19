import addOrderForm from '../components/forms/newOrderForm';
import { getASingleItemOrder, getOrderAndItems, deleteOrderItemsRelationship } from '../api/mergedData';
import { getOrders, getSingleOrder } from '../api/orderData';
import { deleteOrderItems } from '../api/orderItemsData';
import closeOrderForm from '../components/forms/closeOrderForm';
import { showOrders } from '../pages/orders';
import viewOrderItems from '../pages/viewOrderItems';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // view all orders from home page
    if (e.target.id.includes('view_order_home')) {
      getOrders(uid).then((orders) => showOrders(orders, uid));
    }

    if (e.target.id.includes('create_order_home')) {
      console.warn('Create an Order');
      addOrderForm();
    }

    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj));
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

    // show the close order form when 'go to payment' button is clicked
    if (e.target.id.includes('go-to-payment-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => closeOrderForm(uid, orderObj));
    }
  });
};

export default domEvents;
