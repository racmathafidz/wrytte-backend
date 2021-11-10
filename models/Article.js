const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const ArticleSchema = new mongoose.Schema({
  imageCover: {
    type: String,
    required: true,
  },
  articleTitle: {
    type: String,
    required: true,
  },
  articleBody: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  authorId: {
    type: String,
    required: true,
  },
  authorData: {
    type: ObjectId,
    ref: 'user',
    required: true,
  },
});

const Article = mongoose.model('article', ArticleSchema);

module.exports = Article;
