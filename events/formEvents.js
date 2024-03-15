const formEvents = (uid) => {
  console.warn(uid);
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      console.warn('Submit Order');
    }
  });
};

export default formEvents;
