import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Calendly from './Calendly';

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
						<div className="btn bg-white inline-block mr-4"><Calendly /></div>
						<HashLink to="#section-pricing" className="btn btn-outline inline-block">Pricing and plans</HashLink>

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
						<li><HashLink className="ml-12" to="#section-1">How it works</HashLink></li>
						<li><HashLink className="ml-12" to="#section-pricing">Pricing</HashLink></li>
						<li><HashLink className="ml-12" to="#section-4">Previous clients</HashLink></li>
						<li><a className="nav-link" href="https://graaphicd.typeform.com/to/BAFUZkmF">Contact</a></li>
					</ul>
				</div>
			</div> 
		</footer>
	)
};

export default Footer;
