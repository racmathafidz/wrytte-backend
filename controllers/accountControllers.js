/* eslint-disable camelcase */
const User = require('../models/User');
const Article = require('../models/Article');

const user_get = async (req, res) => {
  if (req.user) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Credentials', true);     
    res.status(200).json(req.user);
  }
};

const account_profile_get = async (req, res) => {
  try {
    const { userName } = req.params;

    const profileData = await User.findOne({ userName });

    const articleData = await Article.find({ authorId: profileData.id })
      .populate('authorData');

    res.status(200).send({
      profileData,
      articleData,
    });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error', error });
  }
};

module.exports = {
  user_get,
  account_profile_get,
};
