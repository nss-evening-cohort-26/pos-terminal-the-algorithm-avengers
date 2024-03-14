import { getOrders } from '../api/orderData';
import { showOrders } from '../pages/orders';

const navEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view_order_btn')) {
      getOrders(uid).then((orders) => showOrders(orders, uid));
    }
  });
};

export default navEvents;
