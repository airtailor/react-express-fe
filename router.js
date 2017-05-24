const router = require('express').Router();
const path = require('path');

router.get('/api/users/:id', (req, res) =>{
  res.json(
      {
        name: 'tims',
        id: 1,
        superpower: 'pretends to understand clojure'
      }
  );
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


module.exports = router;
