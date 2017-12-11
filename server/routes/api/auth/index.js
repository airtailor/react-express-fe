const express = require('express');
const Axios = require('axios');
const router = express.Router();
const { apiUrl, getHeaders } = require('../../config');

router.post('/validate_token', (req, res) => {
  const headers = getHeaders(req);

  Axios.get(`${apiUrl}/auth/validate_token`, { headers })
    .then(response => {
      res.json({ headers: response.headers, body: response.data.data });
    })
    .catch(err => {
      if (err instanceof Error) {
        console.log('\n\n', 'status: ' + err.response.status);
        res.json({ status: err.response.status });
      } else {
        console.log('error: ', err);
        res.json({ err });
      }
    });
});

router.post('/sign_in', (req, res) => {
  const { email, password } = req.body;
  Axios.post(`${apiUrl}/auth/sign_in`, {
    email,
    password,
  })
    .then(response => {
      res.json({ headers: response.headers, body: response.data });
    })
    .catch(err => {
      if (err instanceof Error) {
        console.log('@@@@@@@@@@@@@', err);
        res.json({
          status: err.response.status,
          error: err.response.data.errors.full_messages,
        });
      } else {
        console.log('error: ', err.response);
        res.json({ error: err.response });
      }
    });
});

router.post('/sign_out', (req, res) => {
  const headers = getHeaders(req);

  Axios.delete(`${apiUrl}/auth`, { headers })
    .then(response => {
      res.json(response.status);
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
