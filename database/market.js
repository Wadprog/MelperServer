const mongoose = require('mongoose');

const marketSchema = mongoose.Schema({
  app: { type: String, default: 'FoodStore' },
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
