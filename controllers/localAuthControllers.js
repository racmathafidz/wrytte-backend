/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const passport = require('passport');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const signin_post = (req, res, next) => {
  // the 'authenticate' process located in passport's configs strategy
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.send({ msg: 'Wrong Email or Password.' });
    else {
      req.login(user, (err) => {
        if (err) throw err;
        res.send(req.user);
        console.log(req.user);
      });
    }
  })(req, res, next);
};

const signup_post = (req, res) => {
  const { email, password, fullName } = req.body;

  User.findOne({ email }, async (err, doc) => {
    if (err) throw err;
    // doc is user's data
    if (doc) res.send({ msg: 'User with That Email Already Exist.' });
    if (!doc) {
      // make account userName from email address
      const userName = email.split('@');

      // giving password salt and then hash it
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      // create the account
      await User.create({
        email,
        local: {
          password: hashedPassword,
        },
        userName: userName[0],
        fullName,
      })
        .then(() => res.send({ msg: 'User Created' }))
        .catch((err) => res.send(err));
    }
  });
};

module.exports = {
  signin_post,
  signup_post,
};
