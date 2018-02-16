const express = require('express');
const Axios = require('axios');
const router = express.Router();
const { apiUrl, getHeaders } = require('../../config');

router.post('/find_or_create', (req, res) => {
  const { customer_id } = req.params;
  const headers = getHeaders(req);
  const data = req.body;

  Axios.post(`${apiUrl}/api/customers/find_or_create`, {
    customer: data.customer,
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

router.post(`/create_or_validate_customer`, (req, res) => {
  const headers = getHeaders(req);
  const customer = req.body;

  Axios.post(`${apiUrl}/api/customers/create_or_validate_customer`, {
    customer: customer,
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

router.put('/:customer_id/', (req, res) => {
  const { customer_id } = req.params;

  const headers = getHeaders(req);
  const data = req.body;

  Axios.put(`${apiUrl}/api/customers/${customer_id}`, {
    customer: data.customer,
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

router.get('/:customer_id/measurements/last', (req, res) => {
  const { customer_id } = req.params;
  const headers = getHeaders(req);
  const url = `${apiUrl}/api/customers/${customer_id}/measurements/last`;

  Axios.get(url, { headers })
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

router.post('/:customer_id/measurements', (req, res) => {
  const { customer_id } = req.params;
  const headers = getHeaders(req);
  const data = req.body;
  const url = `${apiUrl}/api/customers/${customer_id}/measurements`;

  Axios.post(url, {
    measurement: data.measurement,
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

router.get(`/:id`, (req, res) => {
  const headers = getHeaders(req);
  const { id } = req.params;

  Axios.get(`${apiUrl}/api/customers/${id}`, {
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

router.get(`/:id/customer_orders`, (req, res) => {
  const headers = getHeaders(req);
  const { id } = req.params;

  Axios.get(`${apiUrl}/api/customers/${id}/customer_orders`, {
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
