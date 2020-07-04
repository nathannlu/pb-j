import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => { 
	return (
		<div>
			<div className="text-white" style={{height: '80rem', backgroundColor: '#585BF2'}}>
				<div className="container mx-auto flex flex-wrap items-center h-full">
					<div className="w-1/2 pr-40 pb-24">
						<h1 style={{color: 'white'}} className="pb-8">
							Design is Expensive and Time Consuming.<br />
							It Doesn’t Have to Be.
						</h1>
						<p className="pb-12" style={{opacity: .9}}>
						No HR. No interviews. No drama. In a few clicks, Graaphic gives you access to a professional designer ready to jump into your creative ecosystem.
						</p>
						<Link to="/pricing" className="btn btn-black btn-glow">
							Schedule Demo
						</Link>
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
			<div className="w-full" style={{backgroundColor:"#f5f5f5"}}>
				<div className="container mx-auto py-24">	
					<div className="w-full text-center pb-12">
						<p>You'll be in good company</p>
					</div>
					<div className="flex flex-wrap pb-6">
						<div className="w-1/5 px-8">	
							<img src="/jackchow.png" style={{height: '80px', filter: 'grayscale(100%)'}} />
						</div>
						<div className="w-1/5 px-8">	
							<img src="https://uploads-ssl.webflow.com/5cac1d95154dfc505c5440ef/5cafb711df904495fc04098d_oakwyn%20font%20logo-p-500.jpeg" />
						</div>
						<div className="w-1/5 px-8">	
							<img src="https://uploads-ssl.webflow.com/5cac1d95154dfc505c5440ef/5cafb65dc7e61fe29a6479eb_sothebys%20realty%20logo-p-500.png" />
						</div>
						<div className="w-1/5 px-8">	
							<img src="https://uploads-ssl.webflow.com/5cac1d95154dfc505c5440ef/5cafb65dc7e61fe29a6479eb_sothebys%20realty%20logo-p-500.png" />
						</div>
						<div className="w-1/5 px-8">	
							<img src="https://uploads-ssl.webflow.com/5cac1d95154dfc505c5440ef/5cafb65dc7e61fe29a6479eb_sothebys%20realty%20logo-p-500.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header;
