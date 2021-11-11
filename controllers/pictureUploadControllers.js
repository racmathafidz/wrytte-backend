/* eslint-disable camelcase */
const DatauriParser = require('datauri/parser');
const path = require('path');

const { uploader } = require('../config/cloudinary');

// Parsing buffer to string
const parser = new DatauriParser();

const picture_upload_post = (req, res) => {
  if (req.file) {
    // Parsing from buffer to string
    const file = parser.format(
      path.extname(req.file.originalname).toString(),
      req.file.buffer,
    ).content;

    // Uploading
    uploader.upload(file)
      .then((result) => {
        res.status(200).send({ image: result.secure_url });
      })
      .catch((err) => {
        res.status(400).send({ msg: err });
      });
  }
};

module.exports = {
  picture_upload_post,
};
