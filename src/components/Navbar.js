import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="container mx-auto py-8 flex flex-wrap items-center">
			<Link className="flex items-center" to="/">
				<img className="inline-block mr-4" src="/logo-small.png" style={{height:'30px'}} />
				<img className="inline-block mt-4" src="http://www.graaphic.co/logo.png" style={{height: '30px'}} />
			</Link>

			<div className="ml-auto inline-block">
				<Link className="nav-link" to="/work">Work</Link>
				<Link className="nav-link" to="/pricing">Pricing</Link>
				<a href="https://app.graaphic.co/" className="btn btn-black">
					Login
				</a>
			</div>
		</nav>
	)
};

export default Navbar;
