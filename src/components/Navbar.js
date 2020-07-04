import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav 
			className="px-24 mx-auto py-8 flex flex-wrap items-center"
			style={{boxShadow: 'rgba(3,27,78,0.1) 0px 2px 4px'}}
		>
			<Link className="flex items-center" to="/">
				<img className="inline-block mr-4" src="/logo-small.png" style={{height:'25px'}} />
				<img className="inline-block mt-2" src="/logo.png" style={{height: '25px'}} />
				<div className="ml-24" style={{color: '#031B4F'}}>
					<Link className="nav-link" to="/work">Work</Link>
					<Link className="nav-link" to="/pricing">Pricing</Link>
				</div>
			</Link>

			<div className="ml-auto inline-block">
				<a href="https://app.graaphic.co/" className="py-4 px-8 bg-black rounded-lg uppercase font-bold text-white" style={{fontSize: '14px'}}>
					Login
				</a>
			</div>
		</nav>
	)
};

export default Navbar;
