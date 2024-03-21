import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';
import { getOrders } from '../api/orderData';

const showRevenue = async (taco, uid) => {
  clearDom();
  const orders = await getOrders(uid);
  const walkIn = orders.filter((o) => o.type === 'in-person').length;
  const callIn = orders.filter((o) => o.type === 'phone').length;
  const online = orders.filter((o) => o.type === 'online').length;
  let domString = '';
  domString = `<div>
  <h1>REVENUE</h1>
  <h1 id="total-revenue">TOTAL REVENUE: $${taco.totalRevenue}</h1>
  <h5 id="date-range">Date Range: 01/01/2024 - 12/31/2024</h5>
  <br>
  <p>TOTAL TIPS: $${taco.totalTips} </p>
  <p>TOTAL CALL IN ORDERS: ${callIn}</p>
  <p>TOTAL WALK IN ORDERS: ${walkIn}</p>
  <p>TOTAL ONLINE ORDERS: ${online}</p>
  <p>Cash: ${taco.cash} </p>
  <p>Credit: ${taco.credit} </p>
  <p>Mobile: ${taco.mobile} </p>
  <p id="payment-types"></p>
</div>`;
  renderToDom('#store', domString);
};
export default showRevenue;
