import { getOrders } from '../api/orderData';
import addOrderForm from '../components/forms/newOrderForm';
import homeLoggedIn from '../components/shared/homeLoggedIn';
import { showOrders } from '../pages/orders';
import clearDom from '../utils/clearDom';

const navEvents = (uid, displayName) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view_order_btn')) {
      getOrders(uid).then((orders) => showOrders(orders, uid));
    }

    if (e.target.id.includes('create_order_btn')) {
      addOrderForm();
    }

    if (e.target.id.includes('image')) {
      clearDom();
      homeLoggedIn(displayName);
    }
  });
};

export default navEvents;
