import { getOrders } from '../api/orderData';
import { showOrders } from '../pages/orders';

const orderFilterStatusBtn = (uid) => {
  document.querySelector('#filter-btn').addEventListener('click', async (e) => {
    const ordered = await getOrders(uid);
    if (e.target.id.includes('openOrder')) {
      const orderOpen = ordered.filter((open) => open.status === true);
      console.warn(orderOpen);
      showOrders(orderOpen, uid);
    }
    if (e.target.id.includes('closedOrder')) {
      const orderClosed = ordered.filter((open) => open.status === false);
      console.warn(orderClosed);
      showOrders(orderClosed, uid);
    }
  });
};

export default orderFilterStatusBtn;
