const router = require('express').Router();
const Sent = require('../models/Sent');


router.get("/", async (req,res) => {
	try {
		const history = await Sent.find().sort({ createdAt: -1 });
		res.status(200).json(history)
	} catch(e) {
		// statements
		res.status(500).json(`Some error occured!!`)
	}

})

module.exports = router