const express = require('express');
const path = require('path');
const router = express.Router();

router.use('/api', require('./api'));

router.get('*.js.gz', function(req, res, next) {
  res.set('Content-Encoding', 'gzip');
  next();
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../../public/index.html'));
});

module.exports = router;
