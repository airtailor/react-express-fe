const express = require('express');
const Axios = require('axios');
const router = express.Router();

const apiUrl = 'http://localhost:3000';

router.get('/api/companies', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ['access-token']: accessToken, uid, expiry };

  Axios.get(`${apiUrl}/api/companies`, {
    headers,
  })
    .then(response => {
      // console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
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

router.post('/api/companies/:id', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = { client, ['access-token']: accessToken, uid };

  console.log('I AM A POST, YO');

  // Axios.get(`${apiUrl}/api/stores/${req.params.id}`, { headers })
  //   .then(response => {
  //     // console.log('return headers get store/id', response.headers);
  //     res.json({ headers: response.headers, body: response.data });
  //   })
  //   .catch(err => {
  //     if (err instanceof Error) {
  //       console.log('@@@@@@@@@@@@@', err);
  //       res.json({ status: err.response.status, error: err });
  //     } else {
  //       console.log('error: ', err);
  //       res.json(err);
  //     }
  //   });
});

module.exports = router;
