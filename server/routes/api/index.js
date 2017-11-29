const express = require('express');
const Axios = require('axios');
const { apiUrl, getHeaders } = require('../config');
const router = express.Router();

router.get('/companies', (req, res) => {
  const headers = getHeaders(req);

  Axios.get(`${apiUrl}/api/companies`, {
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

router.use('/auth', require('./auth'));
router.use('/customers', require('./customers'));
router.use('/orders', require('./orders'));
router.use('/reports', require('./reports'));
router.use('/shipments', require('./shipments'));
router.use('/stores', require('./stores'));
router.use('/users', require('./users'));

module.exports = router;
