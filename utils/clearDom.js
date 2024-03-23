const clearDom = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#filter-btn').innerHTML = '';
};

export default clearDom;
