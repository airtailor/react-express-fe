import express from 'express';
import path from 'path';
import Axios from 'axios';
const router = express.Router();

router.post('/api/validate_token', (req, res) => {
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = { client, ["access-token"]: accessToken, uid };

  Axios.get(`http://localhost:3000/auth/validate_token`, { headers })
  .then(response => {
    res.json({ headers: response.headers, body: response.data.data });
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

router.post('/api/sign_in', (req, res) => {
  const { email, password } = req.body;
  Axios.post('http://localhost:3000/auth/sign_in', {
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
  Axios.post('http://localhost:3000/auth', {
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

  Axios.get(`http://localhost:3000/api/stores/${req.params.id}`, { headers })
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

  Axios.delete('http://localhost:3000/auth/sign_out', { headers })
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

router.post('/api/stores/:store_id/orders', (req, res) => {
  const { store_id } = req.params;
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = { client, ["access-token"]: accessToken, uid };
  //console.log('outgoing headers get store/id/orders', headers);

  Axios.get(`http://localhost:3000/api/stores/${store_id}/orders`, { headers })
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


router.post('/api/stores/:store_id/orders/:order_id', (req, res) => {
  const { store_id, order_id } = req.params;
  const client = req.get('client');
  const accessToken = req.get('access-token');
  const uid = req.get('uid');
  const headers = { client, ["access-token"]: accessToken, uid };
  //console.log('outgoing headers get store/id/orders/id', headers);
  //const url = `http://localhost:3000/api/stores/${store_id}/orders/${order_id}`;
  const url = `http://localhost:3000/api/orders/${order_id}`;
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
  console.log("!!!!! DATA!!", data);
  console.log("!!!!! req.body!!", req.body);
  console.log('outgoing headers put store/id/orders/id', headers);

  Axios.put(`http://localhost:3000/api/stores/${store_id}/orders/${order_id}`, {
    order: data.order,
    headers
  })
  .then(response => {
    console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
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

  Axios.put(`http://localhost:3000/api/customers/${customer_id}`, {
    customer: data.customer,
    headers
  })
  .then(response => {
    console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
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

  Axios.get(`http://localhost:3000/api/tailors`, {
    headers
  })
  .then(response => {
    console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
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

  Axios.get(`http://localhost:3000/api/companies`, {
    headers
  })
  .then(response => {
    console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
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

  Axios.put(`http://localhost:3000/api/stores/${store_id}`, {
    store: data.store,
    headers
  })
  .then(response => {
    console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
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

  Axios.post(`http://localhost:3000/api/stores`, {
    store: data.store,
    headers
  })
  .then(response => {
    console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
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

  Axios.post(`http://localhost:3000/api/shipments`, {
    shipment: data.shipment,
    headers
  })
  .then(response => {
    console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
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
  const url = `http://localhost:3000/api/customers/${customer_id}/measurements/last`;
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
  const url = `http://localhost:3000/api/customers/${customer_id}/measurements`;
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!,', data)
  Axios.post(url, {
    measurement: data.measurement,
    headers
  })
  .then(response => {
    console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
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
  const url = `http://localhost:3000/api/new_orders`;

  Axios.get(url, {
    headers
  })
  .then(response => {
    console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn]\nreturn headers put store/id/orders/id', response.headers);
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
