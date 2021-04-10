import React from 'react';
import './Review.css';
import { BsStar, BsStarFill } from 'react-icons/bs';
import img1 from '../../assets/pic2.jpg';
import img2 from '../../assets/pic1.jpg';
import img3 from '../../assets/pic3.jpg';
import img4 from '../../assets/pic4.jpg';
const data = [
	{
		id: '1',
		img: img1,
		rate: 4,
		name: 'Jhon Mayk',
		subtitle:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit nam voluptatibus quae vitae, laboriosam placeat sunt exercitationem '
	},
	{
		id: '2',
		img: img2,
		name: 'Leyla',
		rate: 5,
		subtitle:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit nam voluptatibus quae vitae, laboriosam placeat sunt exercitationem '
	},
	{
		id: '3',
		rate: 5,
		img: img3,
		name: 'Lusi',
		subtitle:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit nam voluptatibus quae vitae, laboriosam placeat sunt exercitationem '
	},
	{
		id: '4',
		img: img4,
		rate: 3,
		name: 'Ronaldo',
		subtitle:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit nam voluptatibus quae vitae, laboriosam placeat sunt exercitationem '
	}
];
const Box = ({ name, subtitle, rate = 0, image }) => {
	return (
		<div className="box">
			<div className="image">
				<img src={image} alt="" />
			</div>
			<div className="content">
				<h3>{name}</h3>
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
			</div>
		</div>
	);
};
function Review() {
	return (
		<div className="review">
			<h1 className="heading">
				<span>r</span>eview
			</h1>
			<div className="box-container">
				{data.map((i) => (
					<Box rate={i.rate} name={i.name} subtitle={i.subtitle} image={i.img} key={i.key} />
				))}
			</div>
		</div>
	);
}

export default Review;
