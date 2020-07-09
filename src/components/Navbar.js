import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
	return (
		<nav 
			className="px-24 mx-auto py-8 flex flex-wrap items-center"
			style={{backgroundColor:'#231B64', boxShadow: 'rgba(3,27,78,0.1) 0px 2px 4px'}}
		>
			<div className="flex items-center">
				<Link to="/">
					<img className="inline-block mt-2 mr-6" src="/logo-small.png" style={{height: '35px'}} />
					<img className="inline-block mt-2" src="/logo-white.png" style={{height: '25px'}} />
				</Link>
				<div className="ml-24" style={{color: '#fff', opacity: .8}}>
					<HashLink className="nav-link" to="#section-1">How it works</HashLink>
					<HashLink className="nav-link" to="#section-pricing">Pricing</HashLink>
					<HashLink className="nav-link" to="#section-4">Previous clients</HashLink>
					<Link className="nav-link" to="/about">Contact</Link>
				</div>
			</div>

			<div className="ml-auto inline-block">
				<a href="https://app.graaphic.co/" className="py-6 px-16 rounded-lg uppercase font-bold" style={{fontSize: '14px', backgroundColor: 'white', color: '#423DCE'}}>
					Login
				</a>
			</div>
		</nav>
	)
};

export default Navbar;
