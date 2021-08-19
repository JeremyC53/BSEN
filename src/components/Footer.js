import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">Contact us</p>
				<p className="footer-subscription-text">Thanks for doing your part!</p>
				<div className="input-areas">
					<form>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							className="footer-input"
						/>
						<Button buttonStyle="btn--outline">Donate</Button>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>About us</h2>
						<Link to="/mission">Our Mission</Link>
					</div>
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						<Link to="/" className="social-logo">
							BSEN
						</Link>
					</div>
					<small className="website-rights">BSEN © 2021</small>
					<div className="social-icons">
						<Link
							className="social-icon-link facebook"
							to="/"
							target="_blank"
							aria-label="Facebook"
						>
							<i className="fab fa-facebook-f"></i>
						</Link>
						<Link
							className="social-icon-link instagram"
							to="/"
							target="_blank"
							aria-label="Instagram"
						>
							<i className="fab fa-instagram"></i>
						</Link>
						<Link
							className="social-icon-link linkedin"
							to="/"
							target="_blank"
							aria-label="LinkedIn"
						>
							<i className="fab fa-linkedin"></i>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
