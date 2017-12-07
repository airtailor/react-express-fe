const express = require('express');
const Axios = require('axios');
const router = express.Router();
const { apiUrl, getHeaders } = require('../../config');

router.get('/users', (req, res) => {
  const headers = getHeaders(req);
  const url = `${apiUrl}/api/users`;

  Axios.get(url, { headers })
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

router.put('/update_password', (req, res) => {
  const headers = getHeaders(req);
  const data = req.body;
  const params = {};

  [data, headers].forEach(function(field) {
    Object.keys(field).forEach(function(key) {
      params[key] = field[key];
    });
  });

  Axios.put(`${apiUrl}/auth/password`, params)
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

router.post('/create_user', (req, res) => {
  const headers = getHeaders(req);
  const data = req.body;
  const params = {};

  [data, headers].forEach(function(field) {
    Object.keys(field).forEach(function(key) {
      params[key] = field[key];
    });
  });

  Axios.post(`${apiUrl}/auth/`, params)
    .then(response => {
      console.log('\n\n\n');
      console.log('FOUND IT', response);
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

router.post('/update_user', (req, res) => {
  const headers = getHeaders(req);
  const data = req.body;
  const params = {};

  [data, headers].forEach(function(field) {
    Object.keys(field).forEach(function(key) {
      params[key] = field[key];
    });
  });

  Axios.put(`${apiUrl}/auth/`, params)
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
