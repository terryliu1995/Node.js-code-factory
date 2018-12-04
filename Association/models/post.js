var mongoose = require("mongoose");

// POST - title, content
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
//singular here
module.exports = mongoose.model("Post", postSchema);