import renderToDom from '../utils/renderToDom';

const viewOrderItems = (obj) => {
  let itemString = '<h1>TOTAL: </h1>';

  obj.items.forEach((item) => {
    itemString += `
    <div class="card w-75 mb-3">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p>PRICE: ${item.price}</p>
      <a href="#" class="card-link" id="item-edit--${item.firebaseKey}">Edit Item</a>
        <a href="#" class="card-link" id="item-delete--${item.firebaseKey}">Delete Item</a>
    </div>
    </div>
    <div class="d-grid gap-2">
      <button class="btn btn-primary" type="button" id="add-item">Add Item</button>
      <button class="btn btn-primary" type="button" id="go-to-payment">Go To Payment</button>
    </div>`;
  });

  renderToDom('#view', itemString);
};

export default viewOrderItems;
