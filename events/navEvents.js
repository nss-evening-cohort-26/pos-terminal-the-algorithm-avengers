import { searchOrders } from '../api/mergedData';
import { getOrders } from '../api/orderData';
import addOrderForm from '../components/forms/newOrderForm';
import { showOrders } from '../pages/orders';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const navEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('view_order_btn')) {
      getOrders(uid).then((orders) => showOrders(orders, uid));
    }

    if (e.target.id.includes('create_order_btn')) {
      addOrderForm();
    }
  });

  const searchBar = document.querySelector('#search');
  searchBar.addEventListener('keyup', (e) => {
    const searchValue = searchBar.value.toLowerCase();

    if (e.keyCode === 13) {
      searchBar.value = '';
      searchOrders(uid, searchValue).then(({ orders }) => {
        if (orders.length > 0) {
          showOrders(orders, uid);
        } else {
          clearDom();
          const domString = '<h1>No results.</h1>';
          renderToDom('#store', domString);
        }
      });
    }
  });
};

export default navEvents;
