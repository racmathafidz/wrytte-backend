const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Admin = require('../models/Admin');
const keys = require('../config/keys');

// Jwt expires time (1 hour)
const maxAge = 1 * 60 * 60;

// Create jwt token
const creatToken = (id) => jwt.sign({ id }, keys.cookie.secretKey, { expiresIn: maxAge });

const signin_get = (req, res) => {
  const alertMessage = req.flash('alertMessage');
  const alertStatus = req.flash('alertStatus');
  const alert = { message: alertMessage, status: alertStatus };

  // Protecting routes
  if (req.cookies.jwt) {
    console.log('Protected');
    res.redirect('/admin/dashboard');
  } else {
    res.render('admin/login/login', { alert });
  }
};

const signin_post = (req, res) => {
  try {
    const { userName, password } = req.body;

    Admin.findOne({ userName })
      .then((response) => {
        if (response) {
          bcrypt.compare(password, response.password, (err, result) => {
            if (err) throw err;
            if (result === true) {
              const token = creatToken(response.id);
              res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
              res.redirect('/admin/dashboard');
            } else {
              req.flash('alertMessage', 'Wrong Password');
              req.flash('alertStatus', 'danger');
              res.redirect('/auth/admin');
            }
          });
        } else {
          req.flash('alertMessage', 'No Account with That Username');
          req.flash('alertStatus', 'danger');
          res.redirect('/auth/admin');
        }
      });
  } catch (error) {
    req.flash('alertMessage', error);
    req.flash('alertStatus', 'danger');
    res.redirect('/auth/admin');
  }
};

// const signup_post = async (req, res) => {
//   try {
//     const { userName, password } = req.body;

//     // Giving password salt and then hash it
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create the account
//     await Admin.create({
//       userName,
//       password: hashedPassword,
//     }).then(() => res.send({ msg: 'User Created' }));
//   } catch (error) {
//     console.log(error);
//   }
// };

const signout_get = (req, res) => {
  // Edit 'jwt' cookie maxAge
  res.cookie('jwt', '', {
    // Max age in miliseconds (here is 1 milisecond)
    maxAge: 1,
  });

  res.redirect('/auth/admin');
};

module.exports = {
  signin_get,
  signin_post,
  // signup_post,
  signout_get,
};
