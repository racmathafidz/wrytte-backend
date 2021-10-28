/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcryptjs');

const User = require('../models/User');
// const keys = require('./keys');

// Local authenticate strategy
passport.use(
  // By default local strategy uses username and password, we will override with email
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    // passReqToCallback: true, // allows us to send the req from our route (lets us check if a user is logged in or not)
  },
  (email, password, done) => {
    User.findOne({ email }, (err, user) => {
      if (err) throw err;
      // When 'done' function in passport strategy running it will run serializeUser function
      // 'null' is the error (there's no error), 'false' is the user data
      if (!user) return done(null, false);
      bcrypt.compare(password, user.local.password, (err, result) => {
        if (err) throw err;
        if (result === true) {
          return done(null, user);
        }
        return done(null, false);
      });
    });
  }),
);

// Google authenticate strategy
// passport.use(
//   new GoogleStrategy({
//     clientID: keys.google.clientID,
//     clientSecret: keys.google.clientSecret,
//     callbackURL: '/auth/google/redirect',
//     passReqToCallback: true, // allows us to pass in the req from our route (lets us check if a user is logged in or not)
//   }),

// );

// serialize user stores a cookie/session inside the browser
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize user handling user's data in cookie/session every single request
// it takes user's data depend on the id in cookie/session value
passport.deserializeUser((id, done) => {
  User.findById({ _id: id }, (err, user) => {
    done(err, user);
  });
});
