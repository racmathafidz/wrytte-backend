const { Router } = require('express');

const adminControllers = require('../controllers/adminControllers');

const router = Router();

router.get('/dashboard', adminControllers.dashboard_get);
router.get('/users', adminControllers.users_get);
router.get('/articles', adminControllers.articles_get);
router.post('/user_delete/:id', adminControllers.user_delete);
router.post('/article_delete/:id', adminControllers.article_delete);

module.exports = router;
