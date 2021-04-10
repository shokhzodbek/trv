import React from 'react';
import tr from '../../assets/tr1.jpg';
import './About.css';
function About() {
	return (
		<div className="about">
			<h1 className="heading">
				<span>a</span>bout <span>l</span>ocations
			</h1>
			<div className="row">
				<div className="image">
					<img src={tr} alt="" />
				</div>
				<div className="content">
					<h3>why choose us?</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus cupiditate similique esse
						sed atque quos nostrum voluptatibus! Cupiditate illo perferendis harum impedit rerum dolore et
						non, iure commodi odit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum saepe
						mollitia unde obcaecati vel debitis doloribus facilis consequatur nam est autem tempore
						inventore ratione ipsam quia exercitationem quod, natus provident!
					</p>
					<a href="/">
						<button className="btn btn1">read more</button>
					</a>
					<a href="/">
						<button className="btn">get started</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default About;
