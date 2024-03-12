import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="store"></div>
    <div id="view"></div>
    <div id="form-container"></div>
  </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
