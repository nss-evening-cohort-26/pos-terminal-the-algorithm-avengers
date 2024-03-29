import client from '../utils/client';

const endpoint = client.databaseURL;

const getRevenue = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue.json?orderBy="uid"&equalTo="${uid}"`, {
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

const getRevenueType = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const array = Object.values(data);
        const mobile = array.filter((r) => r.paymentType === 'mobile').length;
        const credit = array.filter((r) => r.paymentType === 'credit').length;
        const cash = array.filter((r) => r.paymentType === 'cash').length;
        const revenue = array.map((item) => Number(item.total)).reduce((a, b) => a + b, 0);
        const totalTips = array.map((item) => Number(item.tipAmount)).reduce((a, b) => a + b, 0);
        const totalRevenue = (revenue + totalTips).toFixed(2);
        resolve({
          credit, mobile, cash, totalTips, totalRevenue, array
        });
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createRevenue = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue.json`, {
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

const updateRevenue = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue/${payload.firebaseKey}.json`, {
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

export {
  getRevenue, createRevenue, updateRevenue, getRevenueType
};
