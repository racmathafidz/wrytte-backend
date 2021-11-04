const { Router } = require('express');

const localAuthControllers = require('../controllers/localAuthControllers');

const router = Router();

router.post('/signin', localAuthControllers.local_signin_post);
router.post('/signup', localAuthControllers.local_signup_post);
router.get('/signout', localAuthControllers.local_signout_get);

module.exports = router;
