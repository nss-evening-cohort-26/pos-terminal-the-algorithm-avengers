import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const closeOrderForm = (uid, order = {}) => {
  clearDom();
  const domString = `
    <form id="close-order--${order.firebaseKey}" class="mb-4 close-order-form">
      <div class="form-group dropdown">
        <label>Payment type</label>
        <select id="payment-type" class="form-select">
          <option selected value="${order.paymentType || 'Select a payment type'}">${order.paymentType || 'Select a payment type'}</option>
          <option value="cash">cash</option>
          <option value="credit">credit</option>
          <option value="mobile">mobile</option>
        </select>
      </div>
      <div class="form-group">
        <label>Tip amount</label>
        <input type="text" class="form-control" id="tip-amount" placeholder="Enter a tip amount" value="${order.tipAmount || ''}" required>
      </div>
      <button type="submit" id="close-order-btn--${order.firebaseKey}" class="btn btn-success">Close Order</button>
    </form>`;
  renderToDOM('#form-container', domString);
};

export default closeOrderForm;
