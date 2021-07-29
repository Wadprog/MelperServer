const express = require('express');

// Custom dependencies
const payment = require('../controllers/payments');
// Creating the router Object
const router = express.Router();

router.route('/').post(payment.createOne);

module.exports = router;
