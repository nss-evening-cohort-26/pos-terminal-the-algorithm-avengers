import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptyItems = () => {
  const domString = '<h1>All Available Items Are In The Order</h1>';
  renderToDom('#store', domString);
};

const showItemsNotInOrder = (array, orderFirebaseKey) => {
  clearDom();

  let domString = '';

  if (array.length > 0) {
    array.forEach((item) => {
      domString += `<div class="card w-75 mb-3" style="margin: 25px auto 10px;">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p>PRICE: $${item.price}</p>
        <hr>
        <a href="#" class="card-link" id="add-item-to-order-btn--${orderFirebaseKey}--${item.firebaseKey}">Add Item To Order</a>
      </div>
      </div>`;
    });
    renderToDom('#store', domString);
  } else {
    emptyItems();
  }
};

export default showItemsNotInOrder;
