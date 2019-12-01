const mongoose = require('mongoose');

// schema maps to a collection
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: 'String',
    required: true,
    trim: true
  }
},{autoCreate: true});

module.exports = mongoose.model('User', userSchema);