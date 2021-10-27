const { Router } = require('express');

const localAuthControllers = require('../controllers/localAuthControllers');

const router = Router();

router.post('/signin', localAuthControllers.signin_post);
router.post('/signup', localAuthControllers.signup_post);

module.exports = router;
