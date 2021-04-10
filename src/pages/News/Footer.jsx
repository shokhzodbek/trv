import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
function Footer() {
	return (
		<>
			<div className="footer">
				<h1>sign up 25% discount</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, saepe eum! Doloremque delectus sunt
					rem
				</p>
				<form action="">
					<input type="email" name="" id="" placeholder="Enter Your email" />
					<input type="submit" name="" id="" value="sign up" />
				</form>
			</div>
			<div className="footer-content">
				<h1 className="credits">
					created by <span>mr shokhzod</span> | all rights reserved
				</h1>
				<div className="social">
					<a href="/">
						<FaFacebook />
					</a>
					<a href="/">
						<FaInstagram />
					</a>
					<a href="/">
						<FaTwitter />
					</a>
					<a href="/">
						<FaGithub />
					</a>
				</div>
			</div>
		</>
	);
}

export default Footer;
