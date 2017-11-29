const express = require('express');
const path = require('path');
const Axios = require('axios');
const router = express.Router();

const { apiUrl, getHeaders } = require('../../config');

router.get('/currentReport', (req, res) => {
  const headers = getHeaders(req);

  Axios.get(`${apiUrl}/api/reports/current_report`, { headers })
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

module.exports = router;
