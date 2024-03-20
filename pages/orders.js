import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>No Orders</h1>';
  renderToDOM('#store', domString);
};

const showOrders = (array) => {
  clearDom();
  if (array.length <= 0) {
    emptyOrders();
  } else {
    let domString = '<div class="order-container">';
    array.forEach((order) => {
      domString += `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${order.customer_name}</h5>
            <div class="order-info">
              <span>Order status: ${order.status ? 'open' : 'closed'}</span>
              <span>Phone: ${order.customer_phone}</span>
              <span>Email: ${order.customer_email}</span>
              <span>Order type: ${order.type}</span>
            </div>
            <div class="order-btns">
              <a href="#" id="view-order-btn--${order.firebaseKey}">Details</a>
              <a href="#" id="edit-order-btn--${order.firebaseKey}">Edit</a>
              <a href="#" id="delete-order-btn--${order.firebaseKey}">${order.status ? 'Delete' : ''}</a>
            </div>
          </div>
        </div>`;
    });
    domString += '</div>';
    renderToDOM('#store', domString);
  }
};

export { showOrders, emptyOrders };
