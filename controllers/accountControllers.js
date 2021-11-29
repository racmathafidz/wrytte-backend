const User = require('../models/User');
const Article = require('../models/Article');

const account_profile_get = async (req, res) => {
  try {
    const { userName } = req.params;

    const profileData = await User.findOne({ userName });

    if (!profileData) res.send({ msg: 'User Not Found.' });

    const articleData = await Article.find({ authorId: profileData.id })
      .sort({ publishDate: -1 })
      .populate('authorData');

    res.status(200).send({
      profileData,
      articleData,
    });
  } catch (error) {
    res.status(500).send({ msg: 'Internal Server Error' });
  }
};

const account_profile_update = (req, res) => {
  try {
    const { id } = req.params;
    // Option object { new: true } is for sending  updated data response
    User.findByIdAndUpdate(id, req.body, { new: true })
      .then((response) => {
        res.status(200).send(response);
      });
  } catch (error) {
    res.status(500).send({ msg: 'Internal Server Error', error });
  }
};

module.exports = {
  account_profile_get,
  account_profile_update,
};
