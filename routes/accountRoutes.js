const { Router } = require('express');

const accountControllers = require('../controllers/accountControllers');

const router = Router();

// Apllying cloudinary config middleware
router.get('/:userName', accountControllers.account_profile_get);
router.put('/:id', accountControllers.account_profile_update);

module.exports = router;
