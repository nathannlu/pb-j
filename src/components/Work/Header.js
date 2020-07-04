import React from 'react';

const Header = () => {
	return (
		<header className="h-screen">
			<div className="flex" style={{backgroundColor: '#FA587F', height: '600px'}}>
				<div className="text-center container mx-auto text-white relative pt-40">
					<div className="w-1/2 pb-16 mx-auto">
						<h1 className="text-white pb-8">
							The people we help.
						</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua.
						</p>
					</div>

					<img className="absolute" src="/work-hero.png" />
				</div>
			</div>
		</header>
	)
};

export default Header;
