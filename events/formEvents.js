import { getOrderAndItems } from '../api/mergedData';
import {
  createOrder, getOrders, updateOrder
} from '../api/orderData';
import { createRevenue, updateRevenue } from '../api/revenueData';
import { showOrders } from '../pages/orders';
import viewOrderItems from '../pages/viewOrderItems';

const formEvents = (uid) => {
  //  (uid);
  document.querySelector('#main-container').addEventListener('submit', async (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const payload = {
        customer_name: document.querySelector('#customer_name').value,
        customer_email: document.querySelector('#customer_email').value,
        customer_phone: document.querySelector('#customer_phone').value,
        status: true,
        timeSubmitted: new Date().toISOString().split('T')[0],
        type: document.querySelector('#order-type').value,
        uid
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        // After creating and updating order, the orderitems data is received and we are passing the order items data and the firebaskey key in to viewOrderItems
        updateOrder(patchPayload).then(() => {
          getOrderAndItems().then((orderItemsData) => {
            viewOrderItems({ ...orderItemsData, firebaseKey: name });
          });
        });
      });
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');

      const payload = {
        customer_name: document.querySelector('#customer_name').value,
        customer_email: document.querySelector('#customer_email').value,
        customer_phone: document.querySelector('#customer_phone').value,
        status: true,
        timeSubmitted: new Date().toISOString().split('T')[0],
        type: document.querySelector('#order-type').value,
        uid,
        firebaseKey,
      };

      updateOrder(payload).then(() => {
        getOrders(uid).then((orders) => showOrders(orders, uid));
      });
    }

    if (e.target.id.includes('close-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const orderPayload = {
        status: false,
        firebaseKey
      };
      const orderItems = await getOrderAndItems(firebaseKey);
      const orderItemsTotal = orderItems.items.reduce((totalAmt, item) => totalAmt + parseFloat(item.price) * 1, 0).toFixed(2);

      const revenuePayload = {
        paymentType: document.querySelector('#payment-type').value,
        tipAmount: document.querySelector('#tip-amount').value,
        timeSubmitted: new Date().toISOString().split('T')[0],
        total: orderItemsTotal,
        order_id: firebaseKey,
        uid
      };
      createRevenue(revenuePayload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateRevenue(patchPayload).then(() => {
          getOrders(uid).then((orders) => showOrders(orders, uid));
        });
      });

      updateOrder(orderPayload).then(() => {
        getOrders(uid).then((orders) => showOrders(orders, uid));
      });
    }
  });
};

export default formEvents;
