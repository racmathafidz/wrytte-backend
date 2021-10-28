/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const passport = require('passport');

const google_auth_get = () => {
  // the 'authenticate' process located in passport's configs strategy
  passport.authenticate('google', {
    // getting data scopes
    scope: ['profile', 'email'],
  });
};

const google_redirect_get = () => {
  passport.authenticate('google', (req, res) => {
    res.status(200).send(req.user);
  });
};

module.exports = {
  google_auth_get,
  google_redirect_get,
};
