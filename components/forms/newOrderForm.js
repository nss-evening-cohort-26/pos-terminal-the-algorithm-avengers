import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order}'}" class="mb-4">
      <div class="form-group">
        <label for="image">Customer Name</label>
        <input type="text" class="form-control" id="customer_name" placeholder="Enter your name here" value="${obj.customer_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Customer Email</label>
        <input type="text" class="form-control" id="customer_email" placeholder="Enter your email address here"  value="${obj.customer_email || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Customer Phone</label>
        <input type="text" class="form-control" id="customer_phone" placeholder="Enter your cell number here"  value="${obj.customer_phone || ''}" required>
      </div>
      <div class="form-group">
        <label for="type">Order Type</label>
        <select class="form-control" id="order-type" required>
          <option value="">Select Order Type</option>
          <option value="in-person" ${obj.type === 'in-person' ? 'selected' : ''}>In person</option>
          <option value="online" ${obj.type === 'online' ? 'selected' : ''}>Online</option>
          <option value="phone"  ${obj.type === 'phone' ? 'selected' : ''}>Phone</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary mt-3">${obj.firebaseKey ? 'Update Order' : 'Create an Order'}</button>
      </div>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addOrderForm;
