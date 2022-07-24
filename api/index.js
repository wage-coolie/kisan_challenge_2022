// import express for server
const express = require("express");
// for http request logger
const morgan = require("morgan");
// for accepting cors request
const cors = require("cors");
// for getting variables from dotenv files
const dotenv = require('dotenv');
// mongodb client
const mongoose = require("mongoose");



// // importing routes
const send_otp = require("./routes/send_otp.js")
const history = require("./routes/history.js")


// Initialise the express server
const app = express();

// using morgan for better logging (common profile)
app.use(morgan('common'));

// using cors - Cross Origin Resource Sharing
app.use(cors());

dotenv.config();
// connecting mongo server
mongoose.connect(process.env.DB_URL , {useNewUrlParser : true , useUnifiedTopology : true})
	.then(() => console.log('Mongo connection established to OTP db'))
	.catch((err) => console.log(err))

// askign the app to use json parsing which comes pre-bulit in expres
app.use(express.json());
// Starting the server
app.listen(process.env.PORT || 3001,() => console.log(`we are running on ${process.env.PORT || 3001}`));

// Initialising root route
app.get('/', (req,res) => {
	res.end("Hello , the OTP app is running ... ");
})

app.use('/send_otp',send_otp);
app.use('/history',history);




