const { Router } = require('express');

const articleControllers = require('../controllers/articleControllers');

const router = Router();

router.get('/', articleControllers.all_article_get);
router.get('/recomendation', articleControllers.recomendation_article_get);
router.get('/:title', articleControllers.detail_article_get);

module.exports = router;
