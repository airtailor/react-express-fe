const express = require('express');
const Axios = require('axios');
const { apiUrl, getHeaders } = require('../config');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/companies', require('./companies'));
router.use('/customers', require('./customers'));
router.use('/orders', require('./orders'));
router.use('/reports', require('./reports'));
router.use('/shipments', require('./shipments'));
router.use('/stores', require('./stores'));
router.use('/users', require('./users'));

module.exports = router;
