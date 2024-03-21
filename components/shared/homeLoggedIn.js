import renderToDOM from '../../utils/renderToDom';

const homeLoggedIn = (displayName) => {
  let domString = `<div id="homeLoggedIn"><h1 style="margin-top: 80px; margin-bottom: 40px; color: white;">Welcome, ${displayName}!</h1>`;
  domString += `<div class="d-grid gap-2 col-6 mx-auto" id="home-btns" style="margin-top: 300px;">
  <button id="view_order_home" class="btn btn-primary" type="button" style="background-color:#24a580">View Orders</button>
  <button id="create_order_home" class="btn btn-primary" type="button" style="background-color:#19a5bc">Create an Order</button>
  <button id="view_revenue_home" class="btn btn-primary" type="button" style="background-color:#e9b33b; color:black;">View Revenue</button>
</div>
</div>`;
  renderToDOM('#store', domString);
};

export default homeLoggedIn;
