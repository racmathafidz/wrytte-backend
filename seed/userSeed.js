const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const keys = require('../config/keys');

async function seedDB() {
  const database = await MongoClient.connect(keys.mongodb.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const userCollection = database.db('wrytte').collection('users');

    userCollection.drop();

    const userData = [
      {
        _id: mongoose.Types.ObjectId('616c41fedc612661b885eab8'),
        email: 'frank@gmail.com',
        fullName: 'Frank Local',
        userName: 'frank.local',
        imageProfile: 'images/user1.jpg',
        local: {
          password: 'dummypassword',
        },
        google: {
          googleId: '',
        },
      },
      {
        _id: mongoose.Types.ObjectId('616c42fac8212c3b85d20821'),
        email: 'bella@gmail.com',
        fullName: 'Bella Google',
        userName: 'bella.google',
        imageProfile: 'images/user2.jpg',
        local: {
          password: '',
        },
        google: {
          googleId: 'dummypassword',
        },
      },
      {
        _id: mongoose.Types.ObjectId('616c442a098523df42b67984'),
        email: 'sasha@gmail.com',
        fullName: 'Sasha Local',
        userName: 'sasha.local',
        imageProfile: 'images/user3.jpg',
        local: {
          password: 'dummypassword',
        },
        google: {
          googleId: '',
        },
      },
      {
        _id: mongoose.Types.ObjectId('616c44c0e7cc3ab4bf4b1b40'),
        email: 'ali@gmail.com',
        fullName: 'Ali Google',
        userName: 'ali.google',
        imageProfile: 'images/user4.jpg',
        local: {
          password: '',
        },
        google: {
          googleId: 'dummypassword',
        },
      },
    ];

    await userCollection.insertMany(userData)
      .then(() => database.close());
  } catch (error) {
    console.log(error);
  }
}

seedDB();
