/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser');

require('./models/Article');
require('./models/User');
const keys = require('./config/keys');
const articleRoutes = require('./routes/articleRoutes');
const accountRoutes = require('./routes/accountRoutes');
const passportStrategyConfig = require('./config/passport');
const localAuthRoutes = require('./routes/localAuthRoutes');
// const googleAuthRoutes = require('./routes/googleAuthRoutes');
const signOutRoutes = require('./routes/signOutRoutes');

// Port
const PORT = process.env.PORT || 5000;

// Express
const app = express();
app.use(express.json()); // Convert request body to json
app.use(express.urlencoded({ extended: true })); // Convert request body and html post form-data to json
app.use(express.static(path.join(__dirname, 'public'))); // Set public folder

// Enable Cors
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// User's session management
app.use(session({
  secret: keys.cookie.secretKey, // Cookie secret
  resave: true,
  saveUninitialized: true,
}));

// Parsing cookie
app.use(cookieParser(keys.cookie.secretKey)); // Cookie secret, have to match with session's secret

// Passport
app.use(passport.initialize()); // Initializing passport
app.use(passport.session()); // Passport persistent login session

// Connecting to database and start listening
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to Database and Start Listening on Port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

// Routing
app.get('/', (req, res) => {
  res.send('Wellcome to the dashboard.');
});

app.use('/auth/local', localAuthRoutes);
// app.use('/auth/google', googleAuthRoutes);
app.use('/auth/signout', signOutRoutes);
app.use('/api/article', articleRoutes);
app.use('/api/account', accountRoutes);
