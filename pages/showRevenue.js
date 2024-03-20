import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const showRevenue = (array) => {
  clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `<div>
      <h1>REVENUE</h1>
      <h1 id="total-revenue">TOTAL REVENUE: $${item.total}</h1>
      <p>TOTAL TIPS: $${item.tipAmount} </p>
      <p>TOTAL CALL IN ORDERS:</p>
      <p>TOTAL WALK IN ORDERS:</p>
      <p>PAYMENT TYPES:</p>
      <p id="payment-types"></p>
    </div>`;
  });
  renderToDom('#store', domString);
};
export default showRevenue;
