/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const Article = require('./models/Article');
const User = require('./models/User');
const keys = require('./config/keys');
const pictureUploadRoutes = require('./routes/pictureUploadRoutes');
const articleRoutes = require('./routes/articleRoutes');
const accountRoutes = require('./routes/accountRoutes');
const localAuthRoutes = require('./routes/localAuthRoutes');
const googleAuthRoutes = require('./routes/googleAuthRoutes');

// Port
const PORT = process.env.PORT || 5000;

// Express
const app = express();
app.use(express.json()); // Convert request body to json
app.use(express.urlencoded({ extended: true })); // Convert request body and html post form-data to json
app.use(express.static(path.join(__dirname, 'public'))); // Set public folder

// Enable Cors
app.use(cors({
  origin: 'https://wrytte.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', 'https://wrytte.netlify.app');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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

app.use('/picture-upload', pictureUploadRoutes);
app.use('/auth/local', localAuthRoutes);
app.use('/auth/google', googleAuthRoutes);
app.use('/api/article', articleRoutes);
app.use('/api/account', accountRoutes);
