import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const showRevenue = (taco) => {
  clearDom();
  console.warn(taco);
  let domString = '';
  domString = `<div>
  <h1>REVENUE</h1>
  <h1 id="total-revenue">TOTAL REVENUE: $${taco.totalRevenue}</h1>
  <p>TOTAL TIPS: $ </p>
  <p>TOTAL CALL IN ORDERS:</p>
  <p>TOTAL WALK IN ORDERS:</p>
  <p>Cash: ${taco.cash} </p>
  <p>Credit: ${taco.credit} </p>
  <p>Mobile: ${taco.mobile} </p>
  <p id="payment-types"></p>
</div>`;
  renderToDom('#store', domString);
};
export default showRevenue;
