import getOrderAndItems from '../api/mergedData';
import viewOrderItems from '../pages/viewOrderItems';

const domEvents = (uid) => {
  console.warn(uid);

  document.querySelector('#main-container').addEventListener('click', (e) => {
    // This allows me to view the items for the order
    if (e.target.id.includes('view-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getOrderAndItems(firebaseKey).then(viewOrderItems);
    }
  });
};

export default domEvents;
