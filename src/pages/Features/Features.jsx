import React from 'react';
import './Features.css';
import { BsStarFill, BsStar } from 'react-icons/bs';
import img1 from '../../assets/card1.jpg';
import img2 from '../../assets/card2.jpg';
import img3 from '../../assets/card3.jpg';

const data = [
	{
		id: '1',
		image: img1,
		title: 'Egypt',
		subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rem excepturi aspernatur iure!',
		rate: 4,
		discound: '-45%'
	},
	{
		id: '2',
		image: img2,
		title: 'Dubai',
		subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rem excepturi aspernatur iure!',
		rate: 5,
		discound: false
	},
	{
		id: '3',
		image: img3,
		title: 'France',
		subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rem excepturi aspernatur iure!',
		rate: 3,
		discound: '-50%'
	}
];
const Card = ({ title, rate, subtitle, image, discound }) => {
	return (
		<div className="card">
			<span className={`${discound && 'discount'}`}>{discound}</span>
			<img src={image} alt="" />
			<div className="content">
				<h3>{title}</h3>
				<p>{subtitle}</p>
				<div className="card_star">
					{Array(rate)
						.fill()
						.map((item) => (
							<BsStarFill />
						))}
					{Array(5 - rate)
						.fill()
						.map(() => (
							<BsStar />
						))}
				</div>
				<a href="/">
					<button className="btn">Check out</button>
				</a>
			</div>
		</div>
	);
};
function Features() {
	return (
		<div className="features">
			<h1 className="heading">
				<span>f</span>eatured<span> l</span>ocations
			</h1>
			<div className="card_container">
				{data.map((item) => (
					<Card
						title={item?.title}
						subtitle={item.subtitle}
						image={item.image}
						rate={item.rate}
						key={item.id}
						discound={item.discound}
					/>
				))}
			</div>
		</div>
	);
}

export default Features;
