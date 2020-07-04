import React from 'react';

export default function() {
	return (
		<section className="py-40 container flex flex-wrap mx-auto">
			<div className="w-full">
				<div className="w-2/3 text-center mx-auto pb-16">
					<h2>
						Whatever you need, we've got the right plan for you.
					</h2>
				</div>
			</div>
			<div className="w-1/2 px-8">
				<div className="shadow-lg p-16" style={{backgroundColor: '#f5f5f5'}}>
					<div className="pb-24">
						<h1>
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
							<li className="py-2">Excepteur sint occaecat velit</li>
							<li className="py-2">Excepteur sint occaecat velit</li>
							<li className="py-2">Excepteur sint occaecat velit</li>
						</ul>
						<hr />
						<div className="pt-8">
							<a href="https://app.graaphic.co/onboard" className="btn btn-black">View Pricing</a>
						</div>
					</div>
				</div>
			</div>
			<div className="w-1/2 px-8">
				<div className="shadow-lg p-16" style={{backgroundColor: '#f5f5f5'}}>
					<div className="pb-24">
						<h1>
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
							<li className="py-2">Excepteur sint occaecat velit</li>
							<li className="py-2">Excepteur sint occaecat velit</li>
							<li className="py-2">Excepteur sint occaecat velit</li>
						</ul>
						<hr />
						<div className="pt-8">
							<a href="https://app.graaphic.co/onboard" className="btn btn-black">View Pricing</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
