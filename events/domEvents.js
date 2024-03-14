import getOrders from '../api/orderData';
import { showOrders } from '../pages/orders';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view_order_home')) {
      getOrders(uid).then((orders) => showOrders(orders, uid));
    }
  });
};

export default domEvents;
