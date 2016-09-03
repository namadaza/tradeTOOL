var mongoose = require('mongoose');
var PostSchema = new mongoose.Schema({
  postId: { type: String, unique: true, index: true },
  title: String,
  description: String,
  price: { type: Number, default: 0 },
});

module.exports = mongoose.model('Post', PostSchema);
