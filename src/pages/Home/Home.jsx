import React from 'react';
import bg from '../../assets/bg1.jpg';
import './Home.css';
function Home() {
	return (
		<div className="home">
			<div className="home-bg">
				<img src={bg} alt="" />
			</div>
			<div className="content">
				<h3>
					Explore New Places <br />
					Adventure awaits
				</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde repellat delectus numquam rerum
					laborum omnis perspiciatis consectetur. Harum nobis, hic libero, maxime placeat quidem molestias
					neque fugit totam mollitia ex.
				</p>
			</div>
			<div className="form-container">
				<form action="">
					<h4>Search Your Destinations</h4>
					<span>Location</span>
					<input type="text" placeholder="place you want to visit" />
					<span>Guest members</span>
					<input type="number" placeholder="numbers of people" />
					<span>Arrivals</span>
					<input type="date" />
					<span>Leaving</span>
					<input type="date" />
					<button type="submit">Search</button>
				</form>
			</div>
		</div>
	);
}

export default Home;
