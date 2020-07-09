import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="w-full" style={{backgroundColor: '#19212C'}}>
			<div className="container mx-auto relative">
				<div className="absolute w-full rounded-lg shadow px-16 py-24" style={{transform: 'translateY(-50%)', backgroundColor: '#4746E0'}}>
					<div className="md:w-1/2 mx-auto text-white text-center pb-16">
						<h2 className="inline-block text-white pb-4">
							Get started with Graaphic today. 
						</h2>
						<p>
							Replacing in-house designers.
						</p>
					</div>
					<div className="text-center">
						<Link to="/pricing" className="btn bg-white inline-block mr-4">Schedule a demo</Link>
						<Link to="/pricing" className="btn btn-outline inline-block">Pricing and plans</Link>
					</div>
				</div>
			</div>
			<div className="container mx-auto pb-24 pt-40">
				<div className="pt-40">
					<Link className="flex items-center" to="/">
						<img className="mr-4" src="/logo-small.png" style={{height: '30px', opacity: .9}} />
						<img className="mt-4" src="/logo-white.png" style={{height: '30px', opacity: .9}} />
					</Link>
				</div>
				<div className="pt-4 flex flex-wrap text-white" style={{fontSize: '1.6rem'}}>
					<div className="inline-block">© 2020 Graaphic, all rights reserved</div>
					<ul className="inline-block ml-auto flex flex-wrap">
						<li className="pr-12"><Link to="/work">Work</Link></li>
						<li className="pr-12"><Link to="/pricing">Pricing</Link></li>
						<li className="pr-12"><Link to="/about">About</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</div>
			</div> 
		</footer>
	)
};

export default Footer;
