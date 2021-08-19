import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import bsenimg from '../videos/BSENMAP.png';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 1060) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						<img src={bsenimg} alt="Logo" height="60px" width="auto" />
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/mission"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Mission
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/schools"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Schools
							</Link>
						</li>

						<li className="nav-item">
							<Link
								to="/projects"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Projects
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/donations"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Donations
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/contactus"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Contact us
							</Link>
						</li>
					</ul>
					{/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
