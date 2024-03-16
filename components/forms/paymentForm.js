import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const closeOrderForm = (revenue = {}) => {
  clearDom();
  const domString = `
    <form id="close-order--${revenue.firebaseKey}" class="mb-4">
      <div class="dropdown">
        <select class="form-select" aria-label="Default select example">
          <option selected>Select a payment type</option>
          <option value="cash">Cash</option>
          <option value="credit">Credit</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>
      <div class="form-group">
        <label for="tip">Tip Amount</label>
        <input type="text" class="form-control" id="tip-amount" placeholder="Enter a tip amount" value="${revenue.tipAmount || ''}" required>
      </div>
      <button type="submit" id="close-order" class="btn btn-success">Close Order</button>
    </form>`;
  renderToDOM('#form-container', domString);
};

export default closeOrderForm;
