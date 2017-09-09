const express = require('express');
const path = require('path');
const Axios = require('axios');
const router = express.Router();

const apiUrl = process.env.NODE_ENV === 'production' ?
  'https://prod-airtailor-portal-api.herokuapp.com' :
  'http://localhost:3000';

router.post('/api/validate_token', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = { client, ["access-token"]: accessToken, uid };

  Axios.get(`${apiUrl}/auth/validate_token`, { headers })
  .then(response => {
    res.json({ headers: response.headers, body: response.data.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("\n\n\n\n\n\n\n\n@@@@@@@@@@@@@", err);
      res.json({err});
    } else {
      console.log("error: ", err);
      res.json({err});
    }
  });
});

router.post('/api/sign_in', (req, res) => {
  const { email, password } = req.body;
  Axios.post(`${apiUrl}/auth/sign_in`, {
    email,
    password
  })
  .then(response => {
   // console.log('return headers sign_in', response.headers);
    res.json({ headers: response.headers, body: response.data.data });

  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err);
      res.json({status: err.response.status, error: err.response.data.errors.full_messages});
    } else {
      console.log("error: ", err.response);
      res.json({ error: err.response });
    }
  });
});

router.post('/api/sign_up', (req, res, next) => {
  const { email, password, passwordConfirmation } = req.body;
  Axios.post(`${apiUrl}/auth`, {
    email,
    password,
    password_confirmation: passwordConfirmation
  })
  .then(response => {
    res.json({ body: response.data.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err);
      res.json({status: err.response.status, error: err.response.data.errors.full_messages});
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.post('/api/stores/:id', (req, res) => {

  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = { client, ["access-token"]: accessToken, uid };
  //console.log('outgoing headers get store/id', headers);

  Axios.get(`${apiUrl}/api/stores/${req.params.id}`, { headers })
  .then(response => {
   // console.log('return headers get store/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err);
      res.json({status: err.response.status, error: err});
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.post('/api/sign_out', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = { client, ["access-token"]: accessToken, uid };
  //console.log('outgoing headers signout', headers);

  Axios.delete(`${apiUrl}/auth/sign_out`, { headers })
  .then(response => {
    res.json(response.status)
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err);
      res.json(err);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.post('/api/orders', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = { client, ["access-token"]: accessToken, uid };
  const {order} = req.body;

  Axios.post(`${apiUrl}/api/orders`, { headers, order })
  .then(response => {
   // console.log('return headers get store/id/orders', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err);
      res.json(err);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});



router.get('/api/stores/:store_id/orders', (req, res) => {
  const { store_id } = req.params;
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = { client, ["access-token"]: accessToken, uid };
  //console.log('outgoing headers get store/id/orders', headers);

  Axios.get(`${apiUrl}/api/stores/${store_id}/orders`, { headers })
  .then(response => {
   // console.log('return headers get store/id/orders', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err);
      res.json(err);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});


router.get('/api/stores/:store_id/orders/:order_id', (req, res) => {
  const { store_id, order_id } = req.params;
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = { client, ["access-token"]: accessToken, uid };
  //console.log('outgoing headers get store/id/orders/id', headers);
  //const url = `${apiUrl}/api/stores/${store_id}/orders/${order_id}`;
  const url = `${apiUrl}/api/orders/${order_id}`;
  Axios.get(url, { headers })
  .then(response => {
    //console.log('return headers get store/id/orders/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err);
      res.json(err);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});


router.post('/api/stores/:store_id/orders/:order_id/edit', (req, res) => {
  const {store_id, order_id} = req.params;
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ["access-token"]: accessToken, uid, expiry };
  const data = req.body;
  // console.log("!!!!! DATA!!", data);
  // console.log("!!!!! req.body!!", req.body);
  // console.log('outgoing headers put store/id/orders/id', headers);

  Axios.put(`${apiUrl}/api/stores/${store_id}/orders/${order_id}`, {
    order: data.order,
    headers
  })
  .then(response => {
    // console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err.response.status);
      res.json(err.response.status);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.post('/api/customers/find_or_create', (req, res) => {
  const {customer_id} = req.params;
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ["access-token"]: accessToken, uid, expiry };
  const data = req.body;
  console.log('\n\nn\n\n\n******************', data)

  Axios.post(`${apiUrl}/api/customers/find_or_create`, {
    customer: data.customer,
    headers
  })
  .then(response => {
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err.response.status);
      res.json(err.response.status);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});


router.put('/api/customers/:customer_id/', (req, res) => {
  const {customer_id} = req.params;
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ["access-token"]: accessToken, uid, expiry };
  const data = req.body;

  Axios.put(`${apiUrl}/api/customers/${customer_id}`, {
    customer: data.customer,
    headers
  })
  .then(response => {
    //console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err.response.status);
      res.json(err.response.status);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.get('/api/tailors', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ["access-token"]: accessToken, uid, expiry };

  Axios.get(`${apiUrl}/api/tailors`, {
    headers
  })
  .then(response => {
    //console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err.response.status);
      res.json(err.response.status);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.get('/api/companies', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ["access-token"]: accessToken, uid, expiry };

  Axios.get(`${apiUrl}/api/companies`, {
    headers
  })
  .then(response => {
    // console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err.response.status);
      res.json(err.response.status);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.put('/api/stores/:store_id/', (req, res) => {
  const {store_id} = req.params;
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ["access-token"]: accessToken, uid, expiry };
  const data = req.body;

  Axios.put(`${apiUrl}/api/stores/${store_id}`, {
    store: data.store,
    headers
  })
  .then(response => {
    // console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err.response.status);
      res.json(err.response.status);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.post('/api/stores', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ["access-token"]: accessToken, uid, expiry };
  const data = req.body;

  Axios.post(`${apiUrl}/api/stores`, {
    store: data.store,
    headers
  })
  .then(response => {
    // console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err.response.status);
      res.json(err.response.status);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.post('/api/shipments', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ["access-token"]: accessToken, uid, expiry };
  const data = req.body;

  Axios.post(`${apiUrl}/api/shipments`, {
    shipment: data.shipment,
    headers
  })
  .then(response => {
    // console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err.response.status);
      res.json(err.response.status);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.get('/api/customers/:customer_id/measurements/last', (req, res) => {
  const { customer_id } = req.params;
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = { client, ["access-token"]: accessToken, uid };
  const url = `${apiUrl}/api/customers/${customer_id}/measurements/last`;
  //console.log('outgoing headers get store/id/orders', headers);

  console.log('###################################################', url )
  Axios.get(url, { headers })
  .then(response => {
   // console.log('return headers get store/id/orders', response.headers);
   console.log('###################################################', response.body )
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err);
      res.json(err);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.post('/api/customers/:customer_id/measurements', (req, res) => {
  const {customer_id} = req.params;
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ["access-token"]: accessToken, uid, expiry };
  const data = req.body;
  const url = `${apiUrl}/api/customers/${customer_id}/measurements`;
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!,', data)
  Axios.post(url, {
    measurement: data.measurement,
    headers
  })
  .then(response => {
    // console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err.response.status);
      res.json(err.response.status);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.get('/api/new_orders', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ["access-token"]: accessToken, uid, expiry };
  console.log('\n\n\n\n\n\nHIiiiiiiiiiiiasdflasdfjasdofjaosfjosadifjasdoijfds\n\n\n\n\n\n')
  const url = `${apiUrl}/api/new_orders`;

  Axios.get(url, {
    headers
  })
  .then(response => {
    // console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err.response.status);
      res.json(err.response.status);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.get('/api/stores/:store_id/orders_and_messages_count', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ["access-token"]: accessToken, uid, expiry };
  const {store_id} = req.params;
  const url = `${apiUrl}/api/stores/${store_id}/orders_and_messages_count`;
  Axios.get(url, {
    headers
  })
  .then(response => {
    // console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err.response.status);
      res.json(err.response.status);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.get('/api/stores/:store_id/conversations', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ["access-token"]: accessToken, uid, expiry };
  const {store_id} = req.params;
  const url = `${apiUrl}/api/stores/${store_id}/conversations`;
  Axios.get(url, {
    headers
  })
  .then(response => {
    // console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err.response.status);
      res.json(err.response.status);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.get('/api/stores/:store_id/conversations/:conversation_id', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ["access-token"]: accessToken, uid, expiry };
  const {store_id,conversation_id} = req.params;
  const url = `${apiUrl}/api/stores/${store_id}/conversations/${conversation_id}`;
  Axios.get(url, {
    headers
  })
  .then(response => {
    // console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err.response.status);
      res.json(err.response.status);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.post('/api/stores/:store_id/conversations/:conversation_id/messages', (req, res) => {
  const {store_id, conversation_id} = req.params;
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = { client, ["access-token"]: accessToken, uid };
  const {message} = req.body;
  console.log('o!!!!!!!!!!!!!!!!!!!!!!!!!!/n/n/n/n/nn/n/n/nn/n/n/n*************/n', message);

  Axios.post(`${apiUrl}/api/stores/${store_id}/conversations/${conversation_id}/messages`, { headers, message })
  .then(response => {
   // console.log('return headers get store/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err);
      res.json({status: err.response.status, error: err});
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.put('/api/stores/:store_id/conversations/:conversation_id/messages/:message_id', (req, res) => {
  const {store_id, conversation_id, message_id} = req.params;
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = { client, ["access-token"]: accessToken, uid };

  const {message} = req.body;

  const url = `${apiUrl}/api/stores/${store_id}/conversations/${conversation_id}/messages/${message_id}`;
  Axios.put(url, { headers, message })
  .then(response => {
   // console.log('return headers get store/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err);
      res.json({status: err.response.status, error: err});
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});

router.put('/api/users/update_password', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const expiry = req.get('expiry');
  const headers = { client, ["access-token"]: accessToken, uid };
  const data = req.body;

  Axios.put(`${apiUrl}/api/users/${data.id}/update_password`, {
    user: data,
    headers
  })
  .then(response => {
    //console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    if (err instanceof Error){
      console.log("@@@@@@@@@@@@@", err.response.status);
      res.json(err.response.status);
    } else {
      console.log("error: ", err);
      res.json(err);
    }
  });
});


router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports = router;
