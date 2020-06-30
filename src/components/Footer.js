import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="w-full" style={{backgroundColor: '#19212C'}}>
			<div className="container mx-auto relative">
				<div className="absolute w-full bg-white flex shadow px-16 py-24" style={{transform: 'translateY(-50%)', backgroundColor: '#776FFF'}}>
					<h2 className="inline-block text-white">
						Replacing the need for in-house designers 
					</h2>
					<Link to="/pricing" className="btn btn-black inline-block ml-auto">Pricing and plans</Link>
				</div>
			</div>
			<div className="container mx-auto pb-24 pt-40">
				<div className="pt-16">
					<Link className="flex items-center" to="/">
						<img className="mr-4" src="/logo-small.png" style={{height: '30px', opacity: .9}} />
						<img className="mt-4" src="/logo-white.png" style={{height: '30px', opacity: .9}} />
					</Link>
				</div>
				<div className="pt-4 flex flex-wrap" style={{fontSize: '1.6rem'}}>
					<div className="inline-block">© 2020 Graaphic, all rights reserved</div>
					<ul className="inline-block ml-auto flex flex-wrap">
						<li className="pr-12">Contact</li>
						<li className="pr-12">Contact</li>
						<li>Contact</li>
					</ul>
				</div>
			</div> 
		</footer>
	)
};

export default Footer;
