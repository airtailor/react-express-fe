const express = require('express');
const Axios = require('axios');
const router = express.Router();
const { apiUrl, getHeaders } = require('../../config');

router.post('/', (req, res) => {
  const headers = getHeaders(req);
  const data = req.body;

  Axios.post(`${apiUrl}/api/shipments`, {
    shipment: data.shipment,
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
