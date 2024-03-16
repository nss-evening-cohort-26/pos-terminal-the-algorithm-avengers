import client from '../utils/client';

const endpoint = client.databaseURL;

// Get a single order's items
const getOrderItems = (orderFirebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItems.json?orderBy="order_id"&equalTo="${orderFirebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteOrderItems = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItems/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getOrderItems, deleteOrderItems };
