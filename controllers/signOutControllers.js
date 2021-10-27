/* eslint-disable camelcase */

const signout_get = (req, res) => {
  req.logout();
  req.session.destroy();
  res.send(req.user);
};

module.exports = {
  signout_get,
};
