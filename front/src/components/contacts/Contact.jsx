import React from 'react'
import './contact.css'
import {useNavigate} from 'react-router-dom';

export default function Contacts({contact}) {
  const navigate = useNavigate();

	return (
		<div className="row justify-content-center text-center">
			<div className="border border-success rounded row align-items-center m-1 p-2" onClick={() => navigate(`/send_otp/${contact.name}`)} >
				<div className="col-xl-5 col-md-5 col-sm-12 " >
					<img src={'/images/image_proxy.png'} alt=" " className = "image_avatar" />
				</div>
				<div className="col-xl-4 col-md-6 col-sm-12 ">
					<h5 className="">{contact.name}</h5>
					<h6 className=" mb-2 text-muted">{contact.number}</h6>
				</div>
			</div>
		</div>
		)
}