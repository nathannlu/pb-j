import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Particles from './Particles';

const Header = () => { 
	return (
		<div>
			<div className="text-white overflow-hidden" style={{height: '80rem'}}>
				<div className="absolute w-full h-full overflow-hidden" style={{height: '80rem',backgroundColor: '#423DCE', zIndex: -1}}>
					<Particles />
				</div>
				<div className="container mx-auto flex flex-wrap items-center h-full">
					<div className="w-1/2 pr-40 pb-24"> 
							<div>
							<h1 style={{color: 'white'}} className="inline-block bg-primary mb-12">
								Our designers understand your needs.
							</h1>
							<p className="mb-16 bg-primary" style={{opacity: .9}}>
								No HR. No interviews. No drama. In a few clicks, Graaphic gives you access to a professional designer ready to jump into your creative ecosystem.
							</p>
							</div>
						<div className="bg-primary flex">
							<Link onClick={()=>console.log('set appointment')} style={{color: '#5662EC'}} className="btn bg-white mr-8 text-black border btn-glow">
								Schedule Demo 📅
							</Link>
							<Link to="/pricing" className="btn btn-outline">
								View Pricing	
							</Link>
						</div>
						<div className="pt-12">
							<small className="mr-12">&#10003; 1 click set up</small>
							<small>&#10003; 7 day free trial</small>
						</div>
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
			<div className="w-full" style={{backgroundColor:"#F8F8FD"}}>
				<div className="container mx-auto py-24">	
					<div className="w-1/2 mx-auto text-center pb-16">
						<p>
							Trusted by brands everywhere.
						</p>
					</div>
					<div className="flex flex-wrap pb-6">
						<div className="w-1/5 px-8">	
							<img src="/jackchow.png" style={{height: '80px', filter: 'grayscale(100%)'}} />
						</div>
						<div className="w-1/5 px-8">	
							<img src="/clients/sothebys.png" style={{filter: 'grayscale(100%)'}} />
						</div>
						<div className="w-1/5 px-8">	
							<img src="/clients/oakwyn.png" className="mx-auto" style={{height: '80px', filter: 'grayscale(100%)'}} />
						</div>
						<div className="w-1/5 px-8">	
							<img src="/clients/hostgenius.png" style={{filter: 'grayscale(100%)'}} />
						</div>
						<div className="w-1/5 px-8">	
							<img src="/clients/blockspace.png" style={{filter: 'grayscale(100%)'}} />
						</div>
					</div>
					{/*
					<div className="pt-12 text-center">
						<Link to="/work">Read customer stories &rarr;</Link>
					</div>
					*/}
				</div>
			</div>
		</div>
	)
}

export default Header;
