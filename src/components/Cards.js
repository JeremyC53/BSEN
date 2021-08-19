import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Plants from '../videos/Plants.jpg';
import Carousel from 'react-elastic-carousel';

function Cards() {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 500, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 },
	];
	return (
		<div className="cards">
			<h1>Check out our current projects</h1>
			<div className="cards_container">
				{/*	<div className="cards_wrapper">
					<ul className="cards_items"> */}
				<Carousel breakPoints={breakPoints}>
					<CardItem
						src={Plants}
						text="Planting trees"
						label="Projects"
						path="/projects"
						color="#ade6e6"
					/>
					<CardItem
						src={Plants}
						text="Our Association"
						label="Schools"
						path="/schools"
						color="#ffffd8"
					/>
					<CardItem
						src={Plants}
						text="Our Mission"
						label="Mission"
						path="/mission"
						color="#d8ffd8"
					/>
					<CardItem
						src={Plants}
						text="Donations"
						label="Go Fund Me"
						path="/donations"
						color="#ffd8d8"
					/>
					<CardItem
						src={Plants}
						text="Contact us!"
						label="Contacts"
						path="/contactus"
						color="#f7c7f7"
					/>
				</Carousel>
				{/* </ul>
				</div>*/}
			</div>
		</div>
	);
}

export default Cards;
