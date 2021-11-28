const { Router } = require('express');

const adminAuthControllers = require('../controllers/adminAuthControllers');

const router = Router();

router.get('/', adminAuthControllers.signin_get);
router.post('/signin', adminAuthControllers.signin_post);
// router.post('/signup', adminAuthControllers.signup_post);
router.get('/signout', adminAuthControllers.signout_get);

module.exports = router;
