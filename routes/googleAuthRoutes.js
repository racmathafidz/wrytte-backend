const { Router } = require('express');

const googleAuthControllers = require('../controllers/googleAuthControllers');

const router = Router();

router.get('/', googleAuthControllers.google_auth_get);
router.get('/redirect', googleAuthControllers.google_redirect_get);

module.exports = router;
