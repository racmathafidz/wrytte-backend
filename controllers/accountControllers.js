/* eslint-disable camelcase */
const User = require('../models/User');
const Article = require('../models/Article');

const user_get = async (req, res) => {
  if (req.user) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.set('Access-Control-Allow-Credentials', true);     
//     res.status(200).send(req.user);
    res.status(200).send({
      success: true,
      message: 'user has successfully authenticated',
      user: 'Ok',      
    });
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
