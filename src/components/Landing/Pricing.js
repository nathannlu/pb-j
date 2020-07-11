import React from 'react';
import Particles from './Particles'; 
import Calendly from '../Calendly';

export default function() {
	return (
		<section id="section-pricing" className="py-40 w-full relative flex flex-wrap mx-auto">
			<div className="absolute top-0 w-full h-full overflow-hidden" style={{backgroundColor: '#231B64',zIndex: -1}}>
				<Particles />
			</div>
			<div className="container mx-auto flex flex-wrap">
				<div className="w-full">
					<div className="w-full md:w-1/2 text-center mx-auto pb-24">
						<h2 className="text-white">
							Whatever you need, we've got the right plan for you.
						</h2>
					</div>
				</div>
				<div className="w-full md:w-1/2 pb-8 px-8">
					<div className="shadow-lg p-16 rounded-lg" style={{backgroundColor: '#f5f5f5'}}>
						<div className="pb-24">
							<h1 style={{color: '#423DCE'}}>
								Standard
							</h1>
							<p style={{fontSize: '1.6rem'}}>
								Graphic design for small businesses
							</p>
						</div>
						<div>
							<h5 className="pb-8">
								What's included
							</h5>
							<hr />
							<ul className="py-4 list-disc" style={{listStylePosition: 'inside'}}>
								<li className="py-2">Dedicated designer</li>
								<li className="py-2">Unlimited requests</li>
								<li className="py-2">Unlimited revisions</li>
								<li className="py-2">1-2 day turnaround</li>
								<li className="py-2">30-day satisfaction guarantee</li>
							</ul>
							<hr />
							<div className="pt-8 flex">
								<h3>
								$399
								</h3>
							<div className="btn btn-black ml-auto"><Calendly /></div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2 pb-8 px-8">
					<div className="shadow-lg p-16 rounded-lg" style={{backgroundColor: '#f5f5f5'}}>
						<div className="pb-24">
							<h1 style={{color: '#423DCE'}}>
								Premium
							</h1>
							<p style={{fontSize: '1.6rem'}}>
								Graphic design for coporations
							</p>
						</div>
						<div>
							<h5 className="pb-8">
								What's included
							</h5>
							<hr />
							<ul className="py-4 list-disc" style={{listStylePosition: 'inside'}}>
								<li className="py-2">Dedicated designer</li>
								<li className="py-2">Unlimited requests</li>
								<li className="py-2">Unlimited revisions</li>
								<li className="py-2 font-bold">Advanced infographics</li>
								<li className="py-2 font-bold">Real-time collaboration</li>
								<li className="py-2 font-bold">Same day turnaround</li>
								<li className="py-2 font-bold">30-day satisfaction guarantee</li>
							</ul>
							<hr />
							<div className="pt-8 flex">
								<h3>
								$769
								</h3>
								<div className="btn btn-black ml-auto"><Calendly /></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
