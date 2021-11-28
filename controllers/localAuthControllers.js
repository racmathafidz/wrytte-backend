const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const keys = require('../config/keys');

// Jwt expires time (1 day)
const maxAge = 1 * 24 * 60 * 60;

// Create jwt token
const creatToken = (id) => jwt.sign({ id }, keys.cookie.secretKey, { expiresIn: maxAge });

const local_signin_post = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((response) => {
      if (response) {
        bcrypt.compare(password, response.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            const token = creatToken(response.id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(201).send(response);
          } else {
            res.send({ msg: 'Wrong Password.' });
          }
        });
      } else {
        res.send({ msg: 'No Account with That Email.' });
      }
    });
};

const local_signup_post = (req, res) => {
  const { email, password, fullName } = req.body;

  User.findOne({ email })
    .then(async (response) => {
      if (response) {
        res.send({ msg: 'User with That Email Already Exist.' });
      } else {
        const userName = email.split('@');

        // Giving password salt and then hash it
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the account
        const user = await User.create({
          email,
          userName: userName[0],
          fullName,
          password: hashedPassword,
        }).then(() => res.send({ msg: 'User Created' }));
      }
    })
    .catch((error) => res.send({ msg: error }));
};

const local_signout_get = (req, res) => {
  res.cookie('jwt', '', { httpOnly: true, maxAge: 1 });
  res.clearCookie('jwt', { path: '/' });
};

module.exports = {
  local_signin_post,
  local_signup_post,
  local_signout_get,
};
