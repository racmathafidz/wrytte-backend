const { Router } = require('express');

const articleControllers = require('../controllers/articleControllers');

const router = Router();

router.get('/', articleControllers.all_article_get);
router.get('/recomendation', articleControllers.recomendation_article_get);
router.post('/new-article', articleControllers.new_article_post);
router.get('/:id', articleControllers.detail_article_get);
router.delete('/:id', articleControllers.article_delete);
router.put('/edit/:id', articleControllers.article_edit);

module.exports = router;
