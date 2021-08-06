/**
 * Where all server related stuff lives
 */

// Dependencies
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const Stripe = require('stripe');
// Custom dependencies
const environnement = require('./config');
const connectDB = require('./database');
const isLoggedIn = require('./middleware/auth');
const Logger = require('./utils');
const Errors = require('./errors/errors');
const PUBLISHABLE_KEY =
  'pk_test_51HjZanEq1iLveRUg8fr4BhTbCj19fkcHL5h2TklfiExCycLF6wuPGrHOp6w1MzcMREZ50l68Rg1hHc5rZ1cWkInp005NszYz0y';
const SECRET_KEY =
  'sk_test_51HjZanEq1iLveRUgulSEAVEibvgmTrhciJfhPDnsK4fV6YGoUjuBP3NMuwLDTGmaP8XRtMweO9SMJPR680rrVWYH00wdVEBybx';
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

app.use((req, res, next) => {
  console.log('Logging path: ');
  console.log({ path: req.path });
  next();
});

const stripe = Stripe(SECRET_KEY, { apiVersion: '2020-08-27' });

// Serving the routes
app.use('/auth', require('./routes/auth'));
app.use('/user', require('./routes/user'));
//app.use('/market', isLoggedIn, require('./routes/market'));
//app.use('/store', isLoggedIn, require('./routes/store'));
app.use('/store', require('./routes/store'));
app.use('/market', require('./routes/market'));
app.use('/payments', require('./routes/payments'));

app.post('/create-payment-intent', async (req, res) => {
  console.log('trying payment');
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({ clientSecret });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});

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
