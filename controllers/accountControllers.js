/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const DatauriParser = require('datauri/parser');
const path = require('path');

const User = require('../models/User');
const Article = require('../models/Article');
const { uploader } = require('../config/cloudinary');

// Parsing buffer to string
const parser = new DatauriParser();

const photo_upload_post = (req, res) => {
  if (req.file) {
    // Parsing from buffer to string
    const file = parser.format(
      path.extname(req.file.originalname).toString(),
      req.file.buffer,
    ).content;

    // Uploading
    uploader.upload(file)
      .then((result) => {
        console.log(result);
        res.status(200).send({ imageProfile: result.secure_url });
      })
      .catch((err) => {
        res.status(400).send({ msg: err });
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

const account_profile_update = (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Update ${id}`);
    console.log(req.body);
    // Option object { new: true } is for sending  updated data response
    User.findByIdAndUpdate(id, req.body, { new: true })
      .then((response) => {
        console.log(response);
        res.status(200).send(response);
      });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error', error });
  }
};

module.exports = {
  photo_upload_post,
  account_profile_get,
  account_profile_update,
};
