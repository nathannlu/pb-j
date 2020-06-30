import React from 'react';

const Header = () => { 
	return (
		<div className="text-white" style={{height: '80rem', backgroundColor: '#776FFF'}}>
			<div className="container mx-auto flex flex-wrap items-center h-full">
				<div className="w-1/2 pr-40 pb-24">
					<h1 style={{color: 'white'}} className="pb-6">
		Design is Expensive and Time Consuming.<br />
It Doesn’t Have to Be.
					</h1>
					<p className="pb-6">
						Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et amet.
					</p>
					<button className="btn btn-black">
						Sign up now
					</button>
				</div>
				<div className="w-1/2 h-full relative">
					<img 
						className="absolute" 
						style={{
							left: '-20%',
							width: '170%',
							maxWidth: '170%',
							top: '50%', 
							transform: 'translateY(-50%)'
						}} 
						src="/hero.png" 
					/>
				</div>
			</div>
		</div>
	)
}

export default Header;
