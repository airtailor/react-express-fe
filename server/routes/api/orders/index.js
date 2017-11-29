const express = require('express');
const Axios = require('axios');
const router = express.Router();
const { apiUrl, getHeaders } = require('../../config');

router.get('/new_orders', (req, res) => {
  const headers = getHeaders(req);
  const url = `${apiUrl}/api/new_orders`;

  Axios.get(url, {
    headers,
  })
    .then(response => {
      res.json({ headers: response.headers, body: response.data });
    })
    .catch(err => {
      if (err instanceof Error) {
        console.log('@@@@@@@@@@@@@', err.response.status);
        res.json(err.response.status);
      } else {
        console.log('error: ', err);
        res.json(err);
      }
    });
});

router.post('/', (req, res) => {
  const headers = getHeaders(req);
  const { order } = req.body;

  Axios.post(`${apiUrl}/api/orders`, { headers, order })
    .then(response => {
      res.json({ headers: response.headers, body: response.data });
    })
    .catch(err => {
      if (err instanceof Error) {
        console.log('@@@@@@@@@@@@@', err);
        res.json(err);
      } else {
        console.log('error: ', err);
        res.json(err);
      }
    });
});

router.get('/search/:query', (req, res) => {
  const headers = getHeaders(req);
  const { query } = req.params;

  Axios.get(`${apiUrl}/api/orders/search/${query}`, {
    headers,
  })
    .then(response => {
      res.json({ headers: response.headers, body: response.data });
    })
    .catch(err => {
      if (err instanceof Error) {
        console.log('@@@@@@@@@@@@@', err.response.status);
        res.json(err.response.status);
      } else {
        console.log('error: ', err);
        res.json(err);
      }
    });
});

router.get('/archived', (req, res) => {
  const headers = getHeaders(req);

  Axios.get(`${apiUrl}/api/orders/archived`, {
    headers,
  })
    .then(response => {
      res.json({ headers: response.headers, body: response.data });
    })
    .catch(err => {
      if (err instanceof Error) {
        console.log('@@@@@@@@@@@@@', err.response.status);
        res.json(err.response.status);
      } else {
        console.log('error: ', err);
        res.json(err);
      }
    });
});
module.exports = router;
