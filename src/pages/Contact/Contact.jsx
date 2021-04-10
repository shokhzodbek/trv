import React from 'react';
import Iframe from 'react-iframe';
import { AiOutlineHome } from 'react-icons/ai';
import { FiPhone, FiMail } from 'react-icons/fi';
import './Contact.css';
function Contact() {
	return (
		<div className="contact">
			<h1 className="heading">
				<span>C</span>ontact
			</h1>
			<div className="frame">
				<Iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8308.55819508617!2d69.22074004633599!3d41.31682854867683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8adecf855bf1%3A0xfc995ff30adb460f!2sSamarkanda%20Travel%20and%20Tours!5e0!3m2!1sen!2s!4v1617959722505!5m2!1sen!2s"
					width="100%"
					height="450"
					loading="lazy"
					styles={{ border: 'none' }}
				></Iframe>
				<div className="row">
					<div className="contact-info">
						{' '}
						<div className="box">
							<h3>
								<AiOutlineHome className="icon1" /> <span>Address</span>
							</h3>
							<p>
								samarkand <br /> super <br />
								200012
							</p>
						</div>
						<div className="box">
							<h3>
								<FiPhone className="icon1" />
								<span>Phone</span>
							</h3>
							<p>+998900033455</p>
						</div>
						<div className="box">
							<h3>
								<FiMail className="icon1" />
								<span>Email</span>
							</h3>
							<p>example@gmail.com</p>
						</div>
					</div>

					<div className="form-container">
						<form action="">
							<h3>get in touch</h3>
							<div className="inputBox">
								<input type="text" placeholder="full name" />
								<input type="email" placeholder="email" />
							</div>
							<textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
							<button className="btn">Message</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
