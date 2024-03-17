import { getOrders, updateOrderStatus } from '../api/orderData';
import { showOrders } from '../pages/orders';

const formEvents = (uid) => {
  document.querySelector('#form-container').addEventListener('click', (e) => {
    e.preventDefault();

    // adds payment type, tip amount, and updates order status to closed
    if (e.target.id.includes('close-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        paymentType: document.querySelector('#payment-type').value,
        tipAmount: document.querySelector('#tip-amount').value,
        status: false,
        firebaseKey
      };

      updateOrderStatus(payload).then(() => {
        getOrders(uid).then((orders) => showOrders(orders, uid));
      });
    }
  });
};

export default formEvents;
