import client from '../utils/client';

const endpoint = client.databaseURL;
const getRevenue = (uid) => new Promise((resolve, reject) => {
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
        console.warn({ credit, mobile, cash });
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});
export default getRevenue;
