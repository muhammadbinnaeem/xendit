const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const membersSchema = new Schema({
  first_name: {
    type: 'String',
    required: true,
    trim: true
  },
  last_name: {
    type: 'String',
    required: true,
    trim: true
  },
  email: {
    type: 'String',
    required: true,
    trim: true
  },
  password: {
    type: 'String',
    required: true,
    trim: true
  },
  avatar_url: {
    type: 'String',
    required: true,
    trim: true
  },
  org_name: {
    type: 'String',
    required: true,
    trim: true
  },
  followers: {
    type: [],
  },
  following: {
    type: [],
  }
},{autoCreate: true});



module.exports = mongoose.model('Member', membersSchema);