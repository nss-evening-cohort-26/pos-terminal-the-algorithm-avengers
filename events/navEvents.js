import { getOrders } from '../api/orderData';
import { getRevenue } from '../api/revenueData';
import addOrderForm from '../components/forms/newOrderForm';
import { showOrders } from '../pages/orders';

const navEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view_order_btn')) {
      getOrders(uid).then((orders) => showOrders(orders, uid));
    }

    if (e.target.id.includes('create_order_btn')) {
      addOrderForm();
    }
    if (e.target.id.includes('view_revenue_home')) {
      getRevenue(uid);
    }
  });
};

export default navEvents;
