import express from 'express';
import path from 'path';
import Axios from 'axios';

const router = express.Router();

router.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  Axios.post('http://localhost:3000/auth/sign_in', {
    email,
    password
  })
  .then(response => {
    res.json({ headers: response.headers, body: response.data.data });
  })
  .catch(err => {
    console.log("error: ", err.response);
    res.json({ error: err.response });
  });
});

router.post('/api/sign_up', (req, res) => {
  const { email, password, passwordConfirmation } = req.body;
  Axios.post('http://localhost:3000/auth', {
    email,
    password,
    password_confirmation: passwordConfirmation
  })
  .then(response => {
    res.json({ body: response.data });
  })
  .catch(err => {
    console.log("error: ", err.response);
    res.json({ error: err.response });
  });
});

router.post('/api/store/:id', (req, res) => {
  const { client, accessToken, userId, uid } = req.body;
  Axios.get(`http://localhost:3000/api/stores/${req.params.id}`, {
    headers: {
      client,
      ["access-token"]: accessToken,
      uid
   }
  })
  .then(response => {
    res.json({ headers: response.headers, body: response.data });
  })
  .catch(err => {
    console.log("error: ", err);
    res.json({ error: err });
  });
});

router.post('/api/sign_out', (req, res) => {
  const { uid, accessToken, client } = req.body;
  Axios.delete('http://localhost:3000/auth/sign_out', {
    headers: {
      client,
      ["access-token"]: accessToken,
      uid
    }
  })
  .then(response => {
    res.json(response)
  })
  .catch(err => {
    console.log("error: ", err.response);
    res.json({ error: err.response });
  });
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports = router;

