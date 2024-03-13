import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      </a>
      <div id="create_view">
        <button id="view_order_btn" class="btn btn-outline-success me-2" type="button">View Order</button>
        <button id="create_order_btn" class="btn btn-outline-success me-2" type="button">Create an Order</button>
      </div>
      <div id="search-div" style="display: flex;">
        <input id="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <div id="logout-button" style="margin-left: 5px;"></div>
      </div>
    </div>
  </nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;
