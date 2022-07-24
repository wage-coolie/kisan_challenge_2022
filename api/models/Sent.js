const mongoose = require('mongoose')
const SentSchema = new mongoose.Schema({
	Name:{
		type:String,
		max: 30
	},
	to:{
		type:String,
		max: 15
	},
	message:{
		type:String,
		max:160
	}
},
{ timestamps:true }
);


module.exports = mongoose.model("Sent",SentSchema)