

const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const keys = require('../config/keys');

// Protecting routes (require auth for access routes)
const requireAuth = (req, res, next) => {
  // 'jwt' is user's cookies name
  const token = req.cookies.jwt;

  // Checking cookies token
  if (token) {
    // Verifing cookie's token with secret
    jwt.verify(token, keys.cookie.secretKey, (error, decodedToken) => {
      if (error) {
        console.log(error.message);
        res.redirect('/auth/admin');
      } else {
        next();
      }
    });
  } else {
    res.redirect('/auth/admin');
  }
};

// Save user data in user's local properties and display it in view
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  // Checking cookies token
  if (token) {
    jwt.verify(token, keys.cookie.secretKey, async (error, decodedToken) => {
      if (error) {
        console.log(error.message);

        // If token verifying is error user's local properties will have null value
        res.locals.user = null;
        next();
      } else {
        // If token verifying success, get user's data from database and save it in user's local properties
        const user = await Admin.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth, checkUser };
