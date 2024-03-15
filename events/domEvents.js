import getOrders from '../api/orderData';
import addOrderForm from '../components/forms/newOrderForm';
import { showOrders } from '../pages/orders';

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
  });
};

export default domEvents;
