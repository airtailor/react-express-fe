const express = require('express');
const path = require('path');
const router = express.Router();

router.use('/api', require('./api'));

router.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../../public/index.html'));
});

module.exports = router;
