import addOrderForm from '../components/forms/newOrderForm';
import getOrderAndItems from '../api/mergedData';
import { getOrders } from '../api/orderData';
import { showOrders } from '../pages/orders';
import viewOrderItems from '../pages/viewOrderItems';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view_order_home')) {
      getOrders(uid).then((orders) => showOrders(orders, uid));
    }

    if (e.target.id.includes('create_order_home')) {
      console.warn('Create an Order');
      addOrderForm();
    }

    if (e.target.id.includes('edit-order-btn')) {
      console.warn('Edit Order');
    }

    // This allows me to view the items for the order
    if (e.target.id.includes('view-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getOrderAndItems(firebaseKey).then(viewOrderItems);
    }
  });
};

export default domEvents;
