const { Router } = require('express');

const accountControllers = require('../controllers/accountControllers');

const router = Router();

router.get('/:userName', accountControllers.account_profile_get);

module.exports = router;
