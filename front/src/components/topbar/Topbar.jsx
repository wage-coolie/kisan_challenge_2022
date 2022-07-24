import React from 'react'
import './topbar.css'
import {useNavigate} from 'react-router-dom';

export default function Topbar() {
  const navigate = useNavigate();

	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-light border-bottom">
				<div className="container-fluid">
					<a className="navbar-brand"  onClick={() => navigate('/')}>Kisan OTP Challenge</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<span className="navbar-span"> &nbsp;</span>
						<li className="nav-item" onClick={() => navigate('/')}>
							<a className="nav-link active" aria-current="page"  >All Contacts</a>
						</li>
					<span className="navbar-span">&nbsp;</span>
						<li className="nav-item" onClick={() => navigate('/sent')}>
							<a className="nav-link active"  >All Sent Otps</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		</div>
		)
}