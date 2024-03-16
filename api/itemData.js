import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ITEMS
const getItems = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json?orderBy="uid"&equalTo="${uid}”`, {
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

// CREATE SINGLE ITEM
const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
      // console.warn(data);
    })
    .catch(reject);
});

// CREATE ITEM
const createItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE ITEM
const updateItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// DELETE ITEM
const deleteItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getItems, createItem, updateItem, getSingleItem, deleteItem
};
