const express = require('express');
const Axios = require('axios');
const router = express.Router();
const { apiUrl, getHeaders } = require('../../config');

const rootCompaniesUrl = '/';

router.get(rootCompaniesUrl, (req, res) => {
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

router.post(rootCompaniesUrl, (req, res) => {
  const headers = getHeaders(req);
  const { company } = req.body;

  Axios.post(`${apiUrl}/api/companies`, { company, headers })
    .then(response => {
      res.json({ headers: response.headers, body: response.data });
    })
    .catch(err => {
      if (err instanceof Error) {
        console.log('@@@@@@@@@@@@@', err);
        res.json({ status: err.response.status, error: err });
      } else {
        console.log('error: ', err);
        res.json(err);
      }
    });
});

module.exports = router;
