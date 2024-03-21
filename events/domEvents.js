import addOrderForm from '../components/forms/newOrderForm';
import {
  getASingleItemOrder, getOrderAndItems, deleteOrderItemsRelationship, getItemsNotInTheOrder
} from '../api/mergedData';
import { getOrders, getSingleOrder } from '../api/orderData';
import { createOrderItems, deleteOrderItems, updateOrderItem } from '../api/orderItemsData';
import closeOrderForm from '../components/forms/closeOrderForm';
import { showOrders } from '../pages/orders';
import showItemsNotInOrder from '../pages/showItemsNotInOrder';
import viewOrderItems from '../pages/viewOrderItems';
import { getRevenueType } from '../api/revenueData';
import showRevenue from '../pages/showRevenue';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // view all orders from home page
    if (e.target.id.includes('view_order_home')) {
      getOrders(uid).then((orders) => showOrders(orders, uid));
    }

    if (e.target.id.includes('create_order_home')) {
      addOrderForm();
    }

    if (e.target.id.includes('view_revenue_home')) {
      getRevenueType(uid).then((revenue) => showRevenue(revenue, uid));
    }

    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj));
    }

    // This allows me to view the items for the order
    if (e.target.id.includes('view-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getOrderAndItems(firebaseKey).then(viewOrderItems);
    }
    if (e.target.id.includes('go-back-to-order')) {
      const [, firebaseKey] = e.target.id.split('--');

      getOrderAndItems(firebaseKey).then(viewOrderItems);
    }

    // Click Event for deleting an Order
    if (e.target.id.includes('delete-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      deleteOrderItemsRelationship(firebaseKey).then(() => {
        getOrders(uid).then(showOrders);
      });
    }

    if (e.target.id.includes('delete-item-from-order-btn')) {
      // SPLIT OFF THE BOTH KEYS FROM BUTTON
      const [, orderFirebaseKey, itemFirebaseKey] = e.target.id.split('--');

      // GET THE SINGLE ITEM ORDER SO YOU HAVE THE FIREBASEKEY
      getASingleItemOrder(orderFirebaseKey, itemFirebaseKey)

      // DELETE SINGLE ORDERITEM BY FIREBASEKEY
        .then((orderItem) => deleteOrderItems(orderItem.firebaseKey))
        .then(() => {
          // GET ORDER DETAILS AND VIEW ORDER
          getOrderAndItems(orderFirebaseKey).then(viewOrderItems);
        });
    }
    if (e.target.id.includes('show-items-not-in-order-btn')) {
      const [, orderFirebaseKey] = e.target.id.split('--');
      getItemsNotInTheOrder(orderFirebaseKey, uid).then((itemsArray) => showItemsNotInOrder(itemsArray, orderFirebaseKey));
    }
    if (e.target.id.includes('add-item-to-order-btn')) {
      const [, orderFirebaseKey, itemFirebaseKey] = e.target.id.split('--');
      const payload = {
        item_id: itemFirebaseKey,
        order_id: orderFirebaseKey,
        uid,
      };

      createOrderItems(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrderItem(patchPayload).then(() => {
          getItemsNotInTheOrder(orderFirebaseKey, uid).then((itemsArray) => showItemsNotInOrder(itemsArray, orderFirebaseKey));
        });
      });
    }
    // show the close order form when 'go to payment' button is clicked
    if (e.target.id.includes('go-to-payment-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => closeOrderForm(uid, orderObj));
    }
  });
};

export default domEvents;
