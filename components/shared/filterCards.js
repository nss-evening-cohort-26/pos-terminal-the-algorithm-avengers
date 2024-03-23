import renderToDom from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

const filterCardsStatus = () => {
  clearDom();
  const domString = `
  <div class="dropdown-center" style="margin: 10px; display: flex;
  flex-direction: row;">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Filter By
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" id="openOrder">Open</a></li>
    <li><a class="dropdown-item" href="#" id="closedOrder">Closed</a></li>
  </ul>
  </div>`;
  renderToDom('#filter-btn', domString);
};

export default filterCardsStatus;
