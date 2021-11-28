

const { OAuth2Client } = require('google-auth-library');

const User = require('../models/User');
const keys = require('../config/keys');

const client = new OAuth2Client(keys.google.clientID);

const google_auth_post = async (req, res) => {
  const { token } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: keys.google.clientID,
  });

  const { name, email, picture } = ticket.getPayload();

  User.findOne({ email })
    .then(async (response) => {
      if (response) {
        req.session.userId = response.id;
        res.status(201).send(response);
      } else {
        const userName = email.split('@');
        const user = await User.create({
          email,
          userName: userName[0],
          fullName: name,
          imageProfile: picture,
          google: true,
        });

        req.session.userId = user.id;
        res.status(201).send(user);
      }
    });
};

const google_signout_get = (req, res) => {
  req.session.destroy();
  req.logout();
};

const google_user_get = (req, res) => {
  res.status(200).send(req.user);
};

module.exports = {
  google_auth_post,
  google_signout_get,
  google_user_get,
};
