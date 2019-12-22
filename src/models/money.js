const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 50,
		trim: true
	},
	cost: {
		type: Number,
		min: 0,
		default: 0
	},
	spended: {
		type: Boolean,
		default: false
	},
	note: {
		type: String,
		maxlength: 150,
		trim: true
	},
	compartment: {
		type: ObjectId,
		required: true
	},
	owner: {
		type: ObjectId,
		required: true
	}
})

module.exports = mongoose.model('Money', schema)