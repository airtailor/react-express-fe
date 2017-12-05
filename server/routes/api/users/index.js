const express = require('express');
const Axios = require('axios');
const router = express.Router();
const { apiUrl, getHeaders } = require('../../config');

// post for new users
// put for edit users

router.put('/update_password', (req, res) => {
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

module.exports = router;
