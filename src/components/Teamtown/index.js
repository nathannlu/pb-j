import React from 'react'; 
import MenuBar from '../MenuBar';
import Footer from '../Footer';


const HostGenius = () => {
	return (
		<div>
			<MenuBar />
			<header className="h-screen text-white z-0" style={{backgroundColor: '#455C51', backgroundImage: 'url(/teamtown-hero-pattern.svg', backgroundRepeat: 'no-repeat', backgroundPosition: 'right'}}>
				<div className="container mx-auto h-full flex items-center">
					<div className="w-2/3">
						<h4 className="text-white uppercase pb-6">
							Design & Development 
						</h4>
						<h1>
							Dashboard for founders to build their company upon
						</h1>
					</div>
				</div>
			</header>
			<section className="py-32 container mx-auto">
				<div className="w-2/3 mx-auto">
					<h3 className="pb-8">
						Creating a Trustable Brand.
					</h3>
					<p className="pb-8">
						Teamtown is a global creative services company providing thousands of businesses with unlimited, high-quality design and illustration work at a flat rate. Teamtown was created to deliver reliable, affordable, and scalable creative content to any business.
					</p>
					<p className="pb-8">
						PB+J pushed Teamtown on the international scene crafting a trustworthy brand that stands for quality designs and world-class customer service.
					</p>
				</div>
			</section>
			<div>
				<img className="w-full" src="/teamtown-asset-1.png" />	
			</div>
			<section className="py-32 container mx-auto">
				<div className="w-2/3 mx-auto">
					<h3 className="pb-8">
						Developing a website that inspires trust
					</h3>
					<p className="pb-8">
						One of the key factors that will contribute to the success of Teamtown will be the way their company is presented.
					</p>
					<p className="pb-8">
						As almost all their clients will discover them through online advertisements, Teamtown's website has to appear trustworthy. We spent a great deal of time coming up with colours for a visual identity that appeals to corporate, but still has a design vibe.
					</p>
				</div>
			</section>
			<div>
				<div className="flex flex-wrap">
					<img className="w-1/2" src="/teamtown-asset-2.png" />
					<img className="w-1/2" src="/teamtown-asset-3.png" />
				</div>
				<img className="w-full" src="/teamtown-asset-4.png" />	
			</div>
			<Footer />
		</div>
	)
};

export default HostGenius;
