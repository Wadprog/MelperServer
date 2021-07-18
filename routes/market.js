const express = require('express');

// Custom dependencies
const market = require('../controllers/market');
// Creating the router Object
const router = express.Router();

router.route('/').get(market.getAll);

module.exports = router;
