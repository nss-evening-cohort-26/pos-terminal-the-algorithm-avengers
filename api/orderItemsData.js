import client from '../utils/client';

const endpoint = client.databaseURL;

const getOrderItems = (orderFirebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderItems.json?orderBy="uid"&equalTo="${orderFirebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
    // console.warn(Object.values(data));
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getOrderItems;
