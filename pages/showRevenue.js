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
  <h1 style="margin-bottom: 50px;">REVENUE</h1>
  <h1 id="total-revenue" style="margin-bottom: 50px;">TOTAL REVENUE: $${taco.totalRevenue}</h1>
  <h5 id="date-range">Date Range: 01/01/2024 - 12/31/2024</h5>
  <br>
  <p>TOTAL TIPS: $${(taco.totalTips).toFixed(2)} </p>
  <p>TOTAL CALL IN ORDERS: ${callIn}</p>
  <p>TOTAL WALK IN ORDERS: ${walkIn}</p>
  <p>TOTAL ONLINE ORDERS: ${online}</p>
  <br>
  <h6>PAYMENT TYPES:</h6>
  <p>Cash: ${taco.cash} </p>
  <p>Credit: ${taco.credit} </p>
  <p>Mobile: ${taco.mobile} </p>
  </div>`;

  domString += `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Total</th>
      <th scope="col">Tip Amount</th>
      <th scope="col">Payment Type</th>
      <th scope="col">Time of Close Order</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">`;

  // Having index in the forEach gets the index of the item in the array and then using the + 1 increments it everytime it goes through the loop
  taco.array.forEach((revenue, index) => {
    const rowNum = index + 1;
    domString += `<tr>
    <th scope="row">${rowNum}</th>
    <td>${revenue.total}</td>
    <td>${revenue.tipAmount}</td></td>
    <td>${revenue.paymentType}</td>
    <td>${revenue.timeSubmitted}</td>
  </tr>`;
  });

  domString += `</tbody>
  </table>`;

  renderToDom('#store', domString);
};
export default showRevenue;
