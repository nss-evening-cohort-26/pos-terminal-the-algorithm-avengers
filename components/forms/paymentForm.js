import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const selectPaymentType = (uid, typeId) => {
  let domString = `
    <label for="payment-type">Payment Type</label>
    <select class="form-control" id="type_id" required>
    <option value="">Select a Payment Type</option>`;

  getPaymentTypes(uid).then((paymentTypesArray) => {
    paymentTypesArray.forEach((paymentType) => {
      domString += `
        <option 
          value="${paymentType.firebaseKey}" 
          ${typeId === paymentType.firebaseKey ? 'selected' : ''}>
            ${paymentType.languageTech}
        </option>`;
    });
    domString += '</select>';
    renderToDOM('#select-category', domString);
  });
};

const closeOrderForm = (revenue = {}) => {
  clearDom();
  const domString = `
    <form id="close-order--${revenue.firebaseKey}" class="mb-4">
      <div class="form-group" id="select-payment-type"></div>
      <div class="form-group">
        <label for="tip">Tip Amount</label>
        <input type="text" class="form-control" id="tip-amount" placeholder="Enter a tip amount" value="${revenue.tipAmount || ''}" required>
      </div>
      <button type="submit" id="close-order" class="btn btn-success">Close Order</button>
    </form>`;
  renderToDOM('#form-container', domString);
};

export default closeOrderForm;
