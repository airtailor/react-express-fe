const express = require('express');
const Axios = require('axios');
const router = express.Router();

const apiUrl = 'http://localhost:3000';

const rootCompaniesUrl = '/';

router.get(rootCompaniesUrl, (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ['access-token']: accessToken, uid, expiry };

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
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = { client, ['access-token']: accessToken, uid };
  console.log(req);

  const { company } = req.body;

  Axios.post(`${apiUrl}/api/companies`, { company })
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
