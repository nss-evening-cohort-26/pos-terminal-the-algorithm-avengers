import getOrderAndItems from '../api/mergedData';
import { getOrders, getSingleOrder } from '../api/orderData';
import closeOrderForm from '../components/forms/closeOrderForm';
import { showOrders } from '../pages/orders';
import viewOrderItems from '../pages/viewOrderItems';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // view all orders from home page
    if (e.target.id.includes('view_order_home')) {
      getOrders(uid).then((orders) => showOrders(orders, uid));
    }

    // This allows me to view the items for the order
    if (e.target.id.includes('view-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getOrderAndItems(firebaseKey).then(viewOrderItems);
    }

    // show the close order form when 'go to payment' button is clicked
    if (e.target.id.includes('go-to-payment-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => closeOrderForm(uid, orderObj));
    }
  });
};

export default domEvents;
