import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `<nav id="nav" class="navbar bg-body-tertiary">
    <div class="container-fluid">
    <div id="logo-btn" style="display: flex;">
      <a href="#" id="logo-see-all">
        <span class="navbar-brand mb-0 h1">
            <img id="image" class="login-logo" src="https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png" alt="Store logo" style="width: 50px; margin-left: 10px;"/>
        </span>
      </a>
      <div id="create_view">
        <button id="view_order_btn" class="btn me-2" type="button">View Orders</button>
        <button id="create_order_btn" class="btn me-2" type="button">Create an Order</button>
      </div>
      </div>
      <div id="search-div" style="display: flex;">
        <input id="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style="border-radius: 20px">
        <div id="logout-button"></div>
      </div>
    </div>
  </nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;
