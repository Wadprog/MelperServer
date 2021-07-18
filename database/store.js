const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
  market: { type: mongoose.Schema.Types.ObjectId, ref: 'market' },
  dateAdded: { type: Date, default: Date.now },
  location: {},
  products: [],
});

module.exports = mongoose.model('store', storeSchema);
