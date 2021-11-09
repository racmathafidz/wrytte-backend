const { Router } = require('express');

const accountControllers = require('../controllers/accountControllers');
const { cloudinaryConfig, multerUploads } = require('../config/cloudinary');

const router = Router();

// Apllying cloudinary config middleware
router.use('/*', cloudinaryConfig);
router.post('/image-upload', multerUploads, accountControllers.photo_upload_post);
router.get('/:userName', accountControllers.account_profile_get);
router.put('/:id', accountControllers.account_profile_update);

module.exports = router;
