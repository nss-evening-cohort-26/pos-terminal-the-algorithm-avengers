const formEvents = (uid) => {
  console.warn(uid);
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      console.warn('Submit Order');

      // const payload = {
      //   customer_name: document.querySelector('#customer_name').value,
      //   customer_email: document.querySelector('#customer_email').value,
      //   customer_phone: document.querySelector('#customer_phone').value,
      //   price: '',
      //   status: true,
      //   timeSubmitted:
      // };
    }
  });
};

export default formEvents;
