/*
Handling all authentication
*/

// Dependencies
const express = require('express');
// Custom dependencies
const auth = require('../controllers/auth');

// Creating the router Object
const router = express.Router();
// Rendering the auth form page
router.route('/').post(auth.login);

module.exports = router;
