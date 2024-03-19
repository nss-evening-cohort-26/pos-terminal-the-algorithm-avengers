import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewOrderItems = (obj) => {
  clearDom();

  const total = obj.items.reduce((totalAmt, item) => totalAmt + parseFloat(item.price) * 100, 0);

  let itemString = `<h1>TOTAL: $${Number((total / 100).toFixed(2))} </h1>`;
  if (obj.items.length) {
    obj.items.forEach((item) => {
      itemString += `
      <div class="card w-75 mb-3" style="margin: 0 auto;">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p>PRICE: $${item.price}</p>
        <a href="#" class="card-link" id="item-edit--${item.firebaseKey}">Edit Item</a>
          <a href="#" class="card-link" id="delete-item-from-order-btn--${obj.firebaseKey}--${item.firebaseKey}">Delete Item</a>
      </div>
      </div>`;
    });
  } else {
    itemString += '<h1>There are no items in this order!</h1>';
  }

  itemString += `<div id="itembtns">
  <button class="btn btn-primary" type="button" id="show-items-not-in-order-btn--${obj.firebaseKey}">Add Item</button>
  <button class="btn btn-primary" type="button" id="go-to-payment-btn--${obj.firebaseKey}">Go To Payment</button>
  </div>`;

  renderToDom('#view', itemString);
};

export default viewOrderItems;
