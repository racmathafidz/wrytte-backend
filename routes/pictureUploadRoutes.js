const { Router } = require('express');

const pictureUploadControllers = require('../controllers/pictureUploadControllers');
const { cloudinaryConfig, multerUploads } = require('../config/cloudinary');

const router = Router();

// Apllying cloudinary config middleware
router.use('/*', cloudinaryConfig);
router.post('/', multerUploads, pictureUploadControllers.picture_upload_post);

module.exports = router;
