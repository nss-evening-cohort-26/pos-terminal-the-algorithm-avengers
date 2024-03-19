import { createOrder, getOrders, updateOrder } from '../api/orderData';
import { showOrders } from '../pages/orders';

const formEvents = (uid) => {
  // console.warn(uid);
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const payload = {
        customer_name: document.querySelector('#customer_name').value,
        customer_email: document.querySelector('#customer_email').value,
        customer_phone: document.querySelector('#customer_phone').value,
        price: '',
        status: true,
        timeSubmitted: new Date().toLocaleDateString('en-GB'),
        type: document.querySelector('#order-type').value,
        uid
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrders(uid).then((orders) => showOrders(orders, uid));
        });
      });
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');

      const payload = {
        customer_name: document.querySelector('#customer_name').value,
        customer_email: document.querySelector('#customer_email').value,
        customer_phone: document.querySelector('#customer_phone').value,
        price: '',
        status: true,
        timeSubmitted: new Date().toLocaleDateString('en-GB'),
        type: document.querySelector('#order-type').value,
        uid,
        firebaseKey,
      };

      updateOrder(payload).then(() => {
        getOrders(uid).then((orders) => showOrders(orders, uid));
      });
    }
  });

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

      updateOrder(payload).then(() => {
        getOrders(uid).then((orders) => showOrders(orders, uid));
      });
    }
  });
};

export default formEvents;
