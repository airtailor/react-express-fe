const express = require('express');
const path = require('path');
const Axios = require('axios');
const { apiUrl, getHeaders } = require('./config');

const router = express.Router();

router.post('/api/validate_token', (req, res) => {
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

router.post('/api/sign_in', (req, res) => {
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

router.post('/api/sign_up', (req, res, next) => {
  const { email, password, passwordConfirmation } = req.body;
  Axios.post(`${apiUrl}/auth`, {
    email,
    password,
    password_confirmation: passwordConfirmation,
  })
    .then(response => {
      res.json({ body: response.data.data });
    })
    .catch(err => {
      if (err instanceof Error) {
        console.log('@@@@@@@@@@@@@', err);
        res.json({
          status: err.response.status,
          error: err.response.data.errors.full_messages,
        });
      } else {
        console.log('error: ', err);
        res.json(err);
      }
    });
});

router.post('/api/stores/:id', (req, res) => {
  const headers = getHeaders(req);

  Axios.get(`${apiUrl}/api/stores/${req.params.id}`, { headers })
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

router.post('/api/sign_out', (req, res) => {
  const headers = getHeaders(req);

  Axios.delete(`${apiUrl}/auth/sign_out`, { headers })
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

router.post('/api/orders', (req, res) => {
  const headers = getHeaders(req);
  const { order } = req.body;

  Axios.post(`${apiUrl}/api/orders`, { headers, order })
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

router.get('/api/stores/:store_id/orders', (req, res) => {
  const { store_id } = req.params;
  const headers = getHeaders(req);

  Axios.get(`${apiUrl}/api/stores/${store_id}/orders`, { headers })
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

router.get('/api/stores/:store_id/orders/:order_id', (req, res) => {
  const { store_id, order_id } = req.params;
  const headers = getHeaders(req);

  const url = `${apiUrl}/api/orders/${order_id}`;
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

router.post('/api/stores/:store_id/orders/:order_id/edit', (req, res) => {
  const { store_id, order_id } = req.params;
  const headers = getHeaders(req);
  const data = req.body;

  Axios.put(`${apiUrl}/api/stores/${store_id}/orders/${order_id}`, {
    order: data.order,
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

router.post('/api/customers/find_or_create', (req, res) => {
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

router.put('/api/customers/:customer_id/', (req, res) => {
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

router.get('/api/tailors', (req, res) => {
  const headers = getHeaders(req);

  Axios.get(`${apiUrl}/api/tailors`, {
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

router.get('/api/companies', (req, res) => {
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

router.put('/api/stores/:store_id/', (req, res) => {
  const { store_id } = req.params;
  const headers = getHeaders(req);
  const data = req.body;

  Axios.put(`${apiUrl}/api/stores/${store_id}`, {
    store: data.store,
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

router.post('/api/stores', (req, res) => {
  const headers = getHeaders(req);
  const data = req.body;

  Axios.post(`${apiUrl}/api/stores`, {
    store: data.store,
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

router.post('/api/shipments', (req, res) => {
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

router.get('/api/customers/:customer_id/measurements/last', (req, res) => {
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

router.post('/api/customers/:customer_id/measurements', (req, res) => {
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

router.get('/api/new_orders', (req, res) => {
  const headers = getHeaders(req);
  const url = `${apiUrl}/api/new_orders`;

  Axios.get(url, {
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

router.get('/api/stores/:store_id/orders_and_messages_count', (req, res) => {
  const headers = getHeaders(req);
  const { store_id } = req.params;
  const url = `${apiUrl}/api/stores/${store_id}/orders_and_messages_count`;

  Axios.get(url, {
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

router.get('/api/stores/:store_id/conversations', (req, res) => {
  const headers = getHeaders(req);
  const { store_id } = req.params;
  const url = `${apiUrl}/api/stores/${store_id}/conversations`;

  Axios.get(url, {
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

router.get(
  '/api/stores/:store_id/conversations/:conversation_id',
  (req, res) => {
    const headers = getHeaders(req);
    const { store_id, conversation_id } = req.params;
    const url = `${apiUrl}/api/stores/${store_id}/conversations/${conversation_id}`;

    Axios.get(url, {
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
  }
);

router.post(
  '/api/stores/:store_id/conversations/:conversation_id/messages',
  (req, res) => {
    const { store_id, conversation_id } = req.params;
    const headers = getHeaders(req);
    const { message } = req.body;
    Axios.post(
      `${apiUrl}/api/stores/${store_id}/conversations/${conversation_id}/messages`,
      { headers, message }
    )
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
  }
);

router.put(
  '/api/stores/:store_id/conversations/:conversation_id/messages/:message_id',
  (req, res) => {
    const { store_id, conversation_id, message_id } = req.params;
    const headers = getHeaders(req);
    const { message } = req.body;
    const url = `${apiUrl}/api/stores/${store_id}/conversations/${conversation_id}/messages/${message_id}`;

    Axios.put(url, { headers, message })
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
  }
);

router.put('/api/users/update_password', (req, res) => {
  const headers = getHeaders(req);
  const data = req.body;

  Axios.put(`${apiUrl}/api/users/${data.id}/update_password`, {
    user: data,
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

router.get('/api/orders/search/:query', (req, res) => {
  const headers = getHeaders(req);
  const { query } = req.params;

  Axios.get(`${apiUrl}/api/orders/search/${query}`, {
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

router.get('/api/orders/archived', (req, res) => {
  const headers = getHeaders(req);

  Axios.get(`${apiUrl}/api/orders/archived`, {
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

router.put(`/api/stores/:store_id/orders/alert_customers`, (req, res) => {
  const headers = getHeaders(req);
  const { store_id } = req.params;

  Axios.put(`${apiUrl}/api/stores/${store_id}/orders/alert_customers`, {
    orders: req.body,
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

router.get(`/api/customers/:id`, (req, res) => {
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

router.post(`/api/create_or_validate_customer`, (req, res) => {
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

router.use('/api/reports', require('./routes/reports'));

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

module.exports = router;
