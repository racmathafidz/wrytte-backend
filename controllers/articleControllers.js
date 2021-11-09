/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
const Article = require('../models/Article');

function dashToSpace(string) {
  return string.replace(/-/g, ' ');
}

function capitalizeFirstLetter(string) {
  const arr = string.split(' ').map((items) => items.charAt(0).toUpperCase() + items.slice(1));
  return arr.join(' ');
}

const all_article_get = async (req, res) => {
  try {
    const articleData = await Article.find()
      .sort({ publishDate: -1 })
      .populate('authorData'); // Populate with selecting all keys
      // Populate if just selecting some keys (with 'select')
      // .populate({ path: 'authorData', select: '_id local google' })

    res.status(200).send(articleData);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error', error });
  }
};

const recomendation_article_get = async (req, res) => {
  try {
    const articleAggregate = await Article.aggregate([{ $sample: { size: 3 } }]);
    const articleData = await Article.populate(articleAggregate, { path: 'authorData' });

    res.status(200).send(articleData);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error', error });
  }
};

const detail_article_get = async (req, res) => {
  try {
    const { title } = req.params;
    const lowerCaseTitle = dashToSpace(title);
    const capitalizedTitle = capitalizeFirstLetter(lowerCaseTitle);

    const articleData = await Article.findOne({ articleTitle: capitalizedTitle })
      .populate('authorData');

    res.status(200).send(articleData);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error', error });
  }
};

const new_article_post = async (req, res) => {
  try {
    console.log(req.body);
    const { imageCover, articleTitle, articleBody, authorId, authorData } = req.body;
    await Article.create({
      imageCover,
      articleTitle: capitalizeFirstLetter(articleTitle),
      articleBody,
      authorId,
      authorData,
    }).then((response) => {
      console.log(response);
      res.status(200).send(response);
    });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error', error });
  }
};

module.exports = {
  all_article_get,
  recomendation_article_get,
  detail_article_get,
  new_article_post,
};
