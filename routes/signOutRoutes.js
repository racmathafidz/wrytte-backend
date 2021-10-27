const { Router } = require('express');

const signOutControllers = require('../controllers/signOutControllers');

const router = Router();

router.get('/', signOutControllers.signout_get);

module.exports = router;
