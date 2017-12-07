var mongoose = require("mongoose");
var Schema = mongoose.Schema;

module.exports = mongoose.model('Blog',new Schema({
    title: String,
	body: String,
	author: String,
	category: String,
	comments: [{body: String, data: Date}],
	date: {type: Date , default: Date.now},
	tags: [{title: String}], 
	hidden: Boolean,  
	mete: {
		votes: Number,  
		favs: Number  
	}
}));