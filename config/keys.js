module.exports = {
  google: {
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
  },
  mongodb: {
    dbURI: process.env.dbURI,
  },
  cookie: {
    secretKey: process.env.secret,
  },
};
