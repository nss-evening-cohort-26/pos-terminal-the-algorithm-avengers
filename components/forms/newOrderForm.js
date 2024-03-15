import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="image">Customer Name</label>
        <input type="text" class="form-control" id="customer_name" placeholder="Please enter your name" value="${obj.customer_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Customer Phone</label>
        <input type="text" class="form-control" id="phone" placeholder="Enter your cell number"  value="${obj.customer_phone || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Customer Phone</label>
        <input type="text" class="form-control" id="phone" placeholder="Enter your email address"  value="${obj.customer_email || ''}" required>
      </div>
      <div class="form-group">
        <label for="title">Order Type</label>
        <input type="text" class="form-control" id="order-type" aria-describedby="Type" placeholder="Select an Order Type"  value="${obj.type || ''}"required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">${obj.firebaseKey ? 'Update Order' : 'Create an Order'}</button>
      </div>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addOrderForm;
