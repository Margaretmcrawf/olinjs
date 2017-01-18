var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/robots');

var robotSchema = mongoose.Schema({
  name: String,
  abilities: [String],
  isEvil: Boolean
});

module.exports = mongoose.model("robot", robotSchema);