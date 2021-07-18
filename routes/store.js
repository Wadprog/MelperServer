const express = require('express');

// Custom dependencies
const store = require('../controllers/store');
// Creating the router Object
const router = express.Router();

router.route('/').get(store.getAll).post(store.createOne);
router
  .route('/:storeId/products')
  .post(store.addProduct)
  .get(store.getProducts);
  
module.exports = router;
