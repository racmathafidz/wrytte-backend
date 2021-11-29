const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
require('dotenv').config();

const Article = require('./models/Article');
const User = require('./models/User');
const keys = require('./config/keys');
const pictureUploadRoutes = require('./routes/pictureUploadRoutes');
const articleRoutes = require('./routes/articleRoutes');
const accountRoutes = require('./routes/accountRoutes');
const localAuthRoutes = require('./routes/localAuthRoutes');
const googleAuthRoutes = require('./routes/googleAuthRoutes');
const adminAuthRoutes = require('./routes/adminAuthRoutes');
const adminRoutes = require('./routes/adminRoutes');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

// Port
const PORT = process.env.PORT || 5000;

// Express
const app = express();
app.use(express.json()); // Convert request body to json
app.use(express.urlencoded({ extended: true })); // Convert request body and html post form-data to json
app.use(express.static(path.join(__dirname, 'public'))); // Set static public folder
app.use('/sb-admin-2', express.static(path.join(__dirname, 'node_modules/startbootstrap-sb-admin-2'))); // Set static sb-admin-2 node-modules for accesing css

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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
  cookie: { maxAge: 60000 },
}));

// Parsing cookie
app.use(cookieParser(keys.cookie.secretKey)); // Cookie secret, have to match with session's secret

// Connect-flash
app.use(flash());

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
  res.redirect('/auth/admin');
});
app.use('/admin', requireAuth, checkUser, adminRoutes);
app.use('/picture-upload', pictureUploadRoutes);
app.use('/auth/admin', adminAuthRoutes);
app.use('/auth/local', localAuthRoutes);
app.use('/auth/google', googleAuthRoutes);
app.use('/api/article', articleRoutes);
app.use('/api/account', accountRoutes);

// 404 Page Not Found Route
app.get('*', (req, res) => {
  res.render('admin/404/view_404.ejs', {
    title: 'Page Not Found',
  });
});

// Exports for testing
module.exports = app;
