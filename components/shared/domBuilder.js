import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    
  </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
