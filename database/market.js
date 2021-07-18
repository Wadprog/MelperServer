const mongoose = require('mongoose');

const marketSchema = mongoose.Schema({
  dateAdded: { type: Date, default: Date.now },
  name: {},
  icon: {},
  color: {},
  stores: [
    {
      name: String,
      location: {
        Long: String,
        Lat: String,
      },
      products: [],
    },
  ],
});

module.exports = mongoose.model('market', marketSchema);
