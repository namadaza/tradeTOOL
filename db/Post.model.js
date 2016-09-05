var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  price: { type: Number, default: 0 },
});

module.exports = mongoose.model('Post', PostSchema);
