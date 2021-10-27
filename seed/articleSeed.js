const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const keys = require('../config/keys');

async function seedDB() {
  const database = await MongoClient.connect(keys.mongodb.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const articleCollection = database.db('wrytte').collection('articles');

    articleCollection.drop();

    const articleData = [
      {
        imageCover: 'images/Recruiting.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 1',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c41fedc612661b885eab8',
        authorData: mongoose.Types.ObjectId('616c41fedc612661b885eab8'),
      },
      {
        imageCover: 'images/Freelance.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 2',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c42fac8212c3b85d20821',
        authorData: mongoose.Types.ObjectId('616c42fac8212c3b85d20821'),
      },
      {
        imageCover: 'images/Surtido.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 3',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c442a098523df42b67984',
        authorData: mongoose.Types.ObjectId('616c442a098523df42b67984'),
      },
      {
        imageCover: 'images/Management.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 4',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c44c0e7cc3ab4bf4b1b40',
        authorData: mongoose.Types.ObjectId('616c44c0e7cc3ab4bf4b1b40'),
      },
      {
        imageCover: 'images/Recruiting.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 5',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c41fedc612661b885eab8',
        authorData: mongoose.Types.ObjectId('616c41fedc612661b885eab8'),
      },
      {
        imageCover: 'images/Freelance.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 6',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c42fac8212c3b85d20821',
        authorData: mongoose.Types.ObjectId('616c42fac8212c3b85d20821'),
      },
      {
        imageCover: 'images/Surtido.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 7',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c442a098523df42b67984',
        authorData: mongoose.Types.ObjectId('616c442a098523df42b67984'),
      },
      {
        imageCover: 'images/Management.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 8',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c44c0e7cc3ab4bf4b1b40',
        authorData: mongoose.Types.ObjectId('616c44c0e7cc3ab4bf4b1b40'),
      },
      {
        imageCover: 'images/Recruiting.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 9',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c41fedc612661b885eab8',
        authorData: mongoose.Types.ObjectId('616c41fedc612661b885eab8'),
      },
      {
        imageCover: 'images/Freelance.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 10',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c42fac8212c3b85d20821',
        authorData: mongoose.Types.ObjectId('616c42fac8212c3b85d20821'),
      },
      {
        imageCover: 'images/Surtido.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 11',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c442a098523df42b67984',
        authorData: mongoose.Types.ObjectId('616c442a098523df42b67984'),
      },
      {
        imageCover: 'images/Management.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 12',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c44c0e7cc3ab4bf4b1b40',
        authorData: mongoose.Types.ObjectId('616c44c0e7cc3ab4bf4b1b40'),
      },
      {
        imageCover: 'images/Recruiting.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 13',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c41fedc612661b885eab8',
        authorData: mongoose.Types.ObjectId('616c41fedc612661b885eab8'),
      },
      {
        imageCover: 'images/Freelance.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 14',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c42fac8212c3b85d20821',
        authorData: mongoose.Types.ObjectId('616c42fac8212c3b85d20821'),
      },
      {
        imageCover: 'images/Surtido.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 15',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c442a098523df42b67984',
        authorData: mongoose.Types.ObjectId('616c442a098523df42b67984'),
      },
      {
        imageCover: 'images/Management.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 16',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c44c0e7cc3ab4bf4b1b40',
        authorData: mongoose.Types.ObjectId('616c44c0e7cc3ab4bf4b1b40'),
      },
      {
        imageCover: 'images/Recruiting.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 17',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c41fedc612661b885eab8',
        authorData: mongoose.Types.ObjectId('616c41fedc612661b885eab8'),
      },
      {
        imageCover: 'images/Freelance.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 18',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c42fac8212c3b85d20821',
        authorData: mongoose.Types.ObjectId('616c42fac8212c3b85d20821'),
      },
      {
        imageCover: 'images/Surtido.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 19',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c442a098523df42b67984',
        authorData: mongoose.Types.ObjectId('616c442a098523df42b67984'),
      },
      {
        imageCover: 'images/Management.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 20',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c44c0e7cc3ab4bf4b1b40',
        authorData: mongoose.Types.ObjectId('616c44c0e7cc3ab4bf4b1b40'),
      },
      {
        imageCover: 'images/Recruiting.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 21',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c41fedc612661b885eab8',
        authorData: mongoose.Types.ObjectId('616c41fedc612661b885eab8'),
      },
      {
        imageCover: 'images/Freelance.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 22',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c42fac8212c3b85d20821',
        authorData: mongoose.Types.ObjectId('616c42fac8212c3b85d20821'),
      },
      {
        imageCover: 'images/Surtido.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 23',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c442a098523df42b67984',
        authorData: mongoose.Types.ObjectId('616c442a098523df42b67984'),
      },
      {
        imageCover: 'images/Management.png',
        articleTitle: 'Lorem Ipsum Dolor Sit Amet Consectetur 24',
        articleBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publishDate: '2021-10-01T17:00:00.000Z',
        authorId: '616c44c0e7cc3ab4bf4b1b40',
        authorData: mongoose.Types.ObjectId('616c44c0e7cc3ab4bf4b1b40'),
      },
    ];

    await articleCollection.insertMany(articleData)
      .then(() => database.close());
  } catch (error) {
    console.log(error);
  }
}

seedDB();
