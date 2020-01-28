const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  name: String,
  nameUser: String,
  typeAccount: String,
  balance: Number,
  active: false,
  avatar_url: String,
  bio: String,
  key: String,
});

module.exports = mongoose.model('Account', AccountSchema);