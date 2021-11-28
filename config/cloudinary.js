
const { config, uploader } = require('cloudinary').v2;
const multer = require('multer');

// CLoudinary config
const cloudinaryConfig = (req, res, next) => {
  config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });
  next();
};

// Multer config
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single('file');
// single's argument (here is 'file') must be the same with the input type on client's html tag

module.exports = {
  cloudinaryConfig,
  uploader,
  multerUploads,
};
