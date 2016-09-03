var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  user_id: String,
  username: String,
  password: String,
  image_url: String,
  post_ids: [String],
  rating: Number,
  sales_history: [String]
});

module.exports = mongoose.model('User', UserSchema);
