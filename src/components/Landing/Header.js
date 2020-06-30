import React from 'react';

const Header = () => { 
	return (
		<div className="text-white" style={{height: '80rem', backgroundColor: '#776FFF'}}>
			<div className="container mx-auto flex flex-wrap items-center h-full">
				<div className="w-1/2 pr-24">
					<h1 style={{color: 'white'}} className="pb-6">
						Design for Everyone.
					</h1>
					<p className="pb-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<button className="btn btn-black">
						Sign up now
					</button>
				</div>
				<div className="w-1/2 h-full relative">
					<img className="absolute left-0" style={{top: '50%', transform: 'translateY(-50%)'}} src="/hero.png" />
				</div>
			</div>
		</div>
	)
}

export default Header;
