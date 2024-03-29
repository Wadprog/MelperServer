/**
 *
 * this files make a connection to the database or kill the application in case it is not successful.
 */

const mongoose = require('mongoose');
const { DB_URI } = require('../config');
const Logger = require('../utils');

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    Logger.log('Database connected successfully ');
  } catch (error) {
    Logger.log(` Could not connect to database due to error ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
