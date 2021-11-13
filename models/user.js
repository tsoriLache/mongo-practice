const mongoose = require('mongoose');
const { object } = require('webidl-conversions');

const UserSchema = new mongoose.Schema({
  name: {
    type: object,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
