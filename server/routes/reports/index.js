const express = require('express');
const path = require('path');
const Axios = require('axios');
const router = express.Router();

const apiUrl = 'http://localhost:3000';

router.get('/currentReport', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = {client, ['access-token']: accessToken, uid};

  Axios.get(`${apiUrl}/api/reports/current_report`, {headers})
    .then(response => {
      res.json({headers: response.headers, body: response.data});
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
