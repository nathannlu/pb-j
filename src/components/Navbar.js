import React from 'react';

const Navbar = () => {
	return (
		<nav className="container mx-auto py-8 flex flex-wrap items-center">
			<img src="http://www.graaphic.co/logo.png" style={{height: '30px'}} />

			<div className="ml-auto inline-block">
				<button className="btn btn-black">
					Login
				</button>
			</div>
		</nav>
	)
};

export default Navbar;
