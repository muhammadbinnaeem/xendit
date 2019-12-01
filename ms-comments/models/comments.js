const mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
// schema maps to a collection
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  org_name: {
    type: 'String',
    required: true,
    trim: true
  },
  comment: {
    type: 'String',
    required: true,
    trim: true
  }
},{autoCreate: true});
// Soft delete npm package for deleting records
commentsSchema.plugin(mongoose_delete);
// Overridding moongoose methods for hiding delete records 
commentsSchema.plugin(mongoose_delete, { overrideMethods: ['count', 'find', 'findOne', 'findOneAndUpdate', 'update'] });

module.exports = mongoose.model('Comment', commentsSchema);