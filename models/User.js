const mongoose = require('mongoose');
const { isEmail } = require('validator');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [isEmail, 'please enter a valid email.'],
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  imageProfile: {
    type: String,
    required: true,
    default: 'images/avatar.png',
  },
  local: {
    password: {
      type: String,
      minlength: [6, 'minimum password length is 6 characters.'],
    },
  },
  google: {
    googleId: {
      type: String,
    },
  },
});

UserSchema.plugin(uniqueValidator);

const User = mongoose.model('user', UserSchema);

module.exports = User;
