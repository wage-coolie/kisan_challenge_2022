import React from 'react'
import './not_found.css'

export default function NotFound() {
	return (
		<>
		<div className="row justify-content-center my-2" >
			<h1 className="text-center text-danger">WRONG PAGE</h1>
			<img src={'/images/wrong_image.webp'} alt="wrong house" className="img-fluid not_found_image" />
		</div>
		</>
	)
}