import renderToDOM from '../../utils/renderToDom';

const homeLoggedIn = (displayName) => {
  let domString = `<h1 style="margin-top: 80px; margin-bottom: 40px;">Welcome, ${displayName}</h1>`;
  domString += `<div class="d-grid gap-2 col-6 mx-auto">
  <button id="view_order_home" class="btn btn-primary" type="button">View Orders</button>
  <button id="create_order_home" class="btn btn-primary" type="button">Create an Order</button>
  <button id="view_revenue_home" class="btn btn-primary" type="button">View Revenue</button>
</div>`;
  renderToDOM('#store', domString);
};

export default homeLoggedIn;
