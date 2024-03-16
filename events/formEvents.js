const formEvents = (uid) => {
  document.querySelector('#form-container').addEventListener('click', (e) => {
    if (e.target.id.includes('close-order')) {
      console.warn(uid);
    }
  });
};

export default formEvents;
