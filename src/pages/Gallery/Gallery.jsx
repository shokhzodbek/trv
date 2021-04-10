import React from 'react';
import { FaSearch, FaShare, FaHeart } from 'react-icons/fa';
import './Gallery.css';
import img1 from '../../assets/card1.jpg';
import img2 from '../../assets/card2.jpg';
import img3 from '../../assets/card3.jpg';
const data = [
	{
		id: '1',
		img1: img1
	},
	{
		id: '2',
		img1: img2
	},
	{
		id: '3',
		img1: img3
	},
	{
		id: '4',
		img1: img1
	},
	{
		id: '5',
		img1: img2
	},
	{
		id: '6',
		img1: img3
	}
];
const Box = ({ image }) => {
	return (
		<div className="box">
			<img src={image} alt="" />
			<div className="icons">
				<FaHeart className="first all_icon" />
				<FaShare className="second all_icon" />
				<FaSearch className="last all_icon" />
			</div>
		</div>
	);
};
function Gallery() {
	return (
		<div className="gallery">
			<h1 className="heading">
				<span>g</span>allery
			</h1>
			<div className="box-container">
				{data.map((item) => (
					<Box image={item.img1} key={item.id} />
				))}
			</div>
		</div>
	);
}

export default Gallery;
