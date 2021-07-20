/**
 * Where all server related stuff lives
 */

// Dependencies
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');

// Custom dependencies
const environnement = require('./config');
const connectDB = require('./database');
const isLoggedIn = require('./middleware/auth');
const Logger = require('./utils');
const Errors = require('./errors/errors');

// Configuring the server
const app = express();
// Allowing all origin
app.use(cors());
// Parsing the request Body
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// Serving statics files
app.use(express.static('public'));
// override with POST
app.use(methodOverride('_method'));

// connecting to database
connectDB();

// Serving the routes
app.use('/auth', require('./routes/auth'));
app.use('/user', require('./routes/user'));
app.use('/market', isLoggedIn, require('./routes/market'));
//app.use('/store', isLoggedIn, require('./routes/store'));
app.use('/store', require('./routes/store'));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  const { status = 500, message = Errors.unHandledServerError, ...rest } = err;
  const error = { status, message, ...rest };
  return res.status(status).json(error);
});

// Starting the server
const PORT = process.env.PORT || environnement.PORT;
app.listen(PORT, () =>
  Logger.log(
    `Server in listening in ${environnement.NAME} environment on port ${environnement.PORT}`
  )
);
