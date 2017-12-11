const express = require('express');
const Axios = require('axios');
const router = express.Router();
const { apiUrl, getHeaders } = require('../../config');

router.get('/tailors', (req, res) => {
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

router.get('/retailers', (req, res) => {
  const headers = getHeaders(req);

  Axios.get(`${apiUrl}/api/retailers`, {
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

router.get('/:id', (req, res) => {
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

router.get('/:store_id/orders', (req, res) => {
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

router.get('/:store_id/orders/:order_id', (req, res) => {
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

router.post('/:store_id/orders/:order_id/edit', (req, res) => {
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

router.put('/:store_id/', (req, res) => {
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

router.post('/', (req, res) => {
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

router.get('/:store_id/orders_and_messages_count', (req, res) => {
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

router.get('/:store_id/conversations', (req, res) => {
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

router.get('/', (req, res) => {
  const headers = getHeaders(req);
  const url = `${apiUrl}/api/stores`;

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

router.get('/:store_id/conversations/:conversation_id', (req, res) => {
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
});

router.post(
  '/:store_id/conversations/:conversation_id/messages',
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
  '/:store_id/conversations/:conversation_id/messages/:message_id',
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

router.put(`/:store_id/orders/alert_customers`, (req, res) => {
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

module.exports = router;
