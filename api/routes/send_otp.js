const router = require('express').Router();
const Sent = require('../models/Sent');
// twilio
const dotenv = require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

router.post("/", async (req,res) => {
	const phoneNumber = await process.env.TWILIO_PHONE_NUMBER;
	const to = await req.body.to;
	const messageBody = await req.body.message;
	const name = await req.body.Name;
	try {
		const result = await client.messages.create({body: messageBody, from: phoneNumber, to: to});
		const sent = await new Sent({message: messageBody, Name: name, to: to})
		await sent.save();
		res.status(200).json('Message Sent Sucessfully from Twilio')
	} catch(e) {
		// statements
		const errorMessage = `Something seems fishy, please try again, here is error :- ${e}`
		res.status(500).json({"message": errorMessage})
	}

})

module.exports = router