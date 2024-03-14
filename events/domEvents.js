import getOrderAndItems from '../api/mergedData';
import viewItems from '../pages/viewOrderItems';

const domEvents = (uid) => {
  console.warn(uid);

  document.querySelector('#main-container').addEventListener('click', (e) => {
    // This allows me to view the books for the order
    if (e.target.id.includes('view-order-btn')) {
      // console.warn('VIEW Order', e.target.id);

      const [, firebaseKey] = e.target.id.split('--');
      // This gets the order but has no books.
      // getSingleOrder(firebaseKey).then(viewOrder);

      getOrderAndItems(firebaseKey).then(viewItems);
      // console.warn(e.target.id.split('--'));
    }
  });
};

export default domEvents;
