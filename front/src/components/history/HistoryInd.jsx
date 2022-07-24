import React from 'react'

export default function HistoryInd({history}) {
	// console.log(history)
	return (
		<div className="row p-2 mx-2 py-2 my-2 bg-success bg-opacity-50">
			<div className="border border-success rounded row align-items-center m-1 p-2"  >
				<div className="col-xl-5 col-md-5 col-sm-12 " >
					<img src={'/images/image_proxy.png'} alt=" " className = "image_avatar" />
				</div>
				<div className="col-xl-4 col-md-6 col-sm-12 ">
					<h5 className="">{history.Name}</h5>
					<h6 className=" mb-2 text-muted">{history.to}</h6>
					<h6 className=" mb-2 text-muted">{history.message}</h6>

				</div>
			</div>
		</div>
	)
}