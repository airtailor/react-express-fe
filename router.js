const router = require('express').Router();
const path = require('path');
const Axios = require('axios');

router.get('/api/users/:id', (req, res) =>{
  res.json(
      {
        name: 'tims',
        id: 1,
        superpower: 'pretends to understand clojure'
      }
  );
});

router.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  Axios.post('http://localhost:3000/auth/sign_in', {
    email,
    password
  })
  .then(response => {
    console.log("HEADERS", response.headers);
    console.log("BODY", response.data);
    res.json({ headers: response.headers, body: response.data.data });
  })
  .catch(err => {
    console.log(err);
    res.json({ error: err });
  });

});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


module.exports = router;
