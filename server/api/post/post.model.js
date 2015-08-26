'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  body: String,
  createdDate: Date,
  modifedDate: Date,
  activeDate: Date
});

PostSchema
  .pre('save', function(next) {
    if (this.isNew){
    	this.createdDate = new Date();
    }

    this.modifedDate = new Date();

    next();
  });

module.exports = mongoose.model('Post', PostSchema);