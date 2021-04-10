import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	const [isTrue, setTrue] = useState(false);
	const handleTrue = () => {
		setTrue(!isTrue);
	};
	console.log(isTrue);
	const [scroll, setScroll] = useState(true);
	const handleScroll = () => {
		if (window.scrollY > 30) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};
	window.addEventListener('scroll', handleScroll);
	return (
		<div className={`header ${scroll && 'scroll'}`}>
			<div className="logo">
				<Link to="/">
					<span>LOGO</span>
				</Link>
			</div>
			<ul className={`${isTrue && 'open'}`}>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/fea">features</Link>
				</li>
				<li>
					<Link to="about">about</Link>
				</li>
				<li>
					<Link href="/ga">gallery</Link>
				</li>
				<li>
					<Link to="/re">review</Link>
				</li>
				<li>
					<Link to="/cont">contacts</Link>
				</li>
			</ul>
			<div className="header_menu" onClick={handleTrue}>
				<FaBars />
			</div>
		</div>
	);
}

export default Header;
