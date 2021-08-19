import React from 'react';
import '../App.css';
import FORESTVIDEO from '../videos/FLYINGFOREST.mov';
import { Button } from './Button';
import './HeroSection.css';
// import { Link } from 'react-router-dom';
function HeroSection() {
	return (
		<div className="hero-container">
			<video src={FORESTVIDEO} autoPlay loop muted />
			<h1>Berkshire Eco Schools Network</h1>
			<p>BSENsible</p>
			<div className="hero-btns">
				<Button
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--medium"
					linkplace="/mission"
				>
					Our Mission
				</Button>
				<Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--medium"
					linkplace="/contactus"
				>
					Contact Us
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
