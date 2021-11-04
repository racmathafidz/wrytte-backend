const { Router } = require('express');

const googleAuthControllers = require('../controllers/googleAuthControllers');

const router = Router();

router.post('/', googleAuthControllers.google_auth_post);
router.get('/signout', googleAuthControllers.google_signout_get);
router.get('/user', googleAuthControllers.google_user_get);

module.exports = router;
