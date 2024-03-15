import getOrders from '../api/orderData';
import addOrderForm from '../components/forms/newOrderForm';
import { showOrders } from '../pages/orders';

const navEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view_order_btn')) {
      getOrders(uid).then((orders) => showOrders(orders, uid));
    }

    if (e.target.id.includes('create_order_btn')) {
      console.warn('Create Order Nav Bar');
      addOrderForm();
    }
  });
};

export default navEvents;
