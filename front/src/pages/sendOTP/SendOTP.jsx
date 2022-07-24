import {React, useEffect, useState} from 'react'
import {useNavigate,useParams} from "react-router-dom";
import Users from '../../Users.json'
import './send_otp.css';
import axios from 'axios'

export default function SendOTP() {
	const username = useParams().username;
	const [loading, setLoading] = useState(false)
	const [user, setUser] = useState(Users.filter((item) => (
				item.name == username
			))
		)
	const [otp, setOtp] = useState(String(Math.random()).split('.')[1].slice(0,6))
	const [message, setMessage] = useState(`your OTP for Kisan App is ${otp}`)

	const checkOTP = (message) => {
		let answer = false
		message.split(" ").forEach((word) => ( (word.length == 6 && /^\d+$/.test(word)) ? answer = true : '' ))
		return answer
	}

	const submit = async(e) => {
		e.preventDefault();
		setLoading(true)

		if(checkOTP(message)){
			try{
				// console.log({"to": user[0].number, "message": message})
				await axios.post('/send_otp', {"to": user[0].number, "message": message, "Name": username})
				await setLoading(false)
				alert("DONE")
			}catch(err){
				// console.log(err)
				console.log(err.response.data.message)

				await setLoading(false)
				alert(err.response.data.message)
			}
		}else{
			setLoading(false)
			alert("OTP MUST EXIST, AND BE MUST BE OF 6 DIGIT ONLY")
			return
		}
	}

	return (
		<>
		<div className="card m-2">
			<div className="row justify-content-center text-center my-1">
				<img src={'/images/image_proxy.png'} alt="" className = "img-fuild image_avatar_page" />
				<h1>{user[0].name}</h1>
				<h3>{user[0].number}</h3>
				<hr/>
				<h4>Message to be Sent</h4>
				<h5 className="border border-warning bg-primary col-xl-7 col-md-8 col-sm-9 py-2 text-white">The System generated OTP is {otp}</h5>
				<div className="container">
					<input  multiple type="text"  value={message} className='col-xl-7 col-md-8 col-sm-10' onChange={(e) => setMessage(e.target.value)} />
					<button className="btn btn-success col-xl-1 col-md-2 col-sm-3" disabled={loading} onClick={submit}>{loading ? 'Please Wait' : 'Send OTP'}</button>
				</div>
				<div className="container bg-secondary border mx-3 col-xl-5 col-md-6 col-sm-8 text-white my-5 py-1">
					<p>
						You can send any text, but it must have a 6 digit numeric keyword, which by default would be treated as OTP, There is validation eing performed on it, so be careful. The app would not accept to send message if the messageBody doesn't have a 6 digit OTP.
					</p>
				</div>
			</div>
		</div>
		</>
	)
}