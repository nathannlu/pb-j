import React from 'react';

export default function() {
	return (
		<section className="container mx-auto pb-40">
			<h2 className="pb-8 text-center">All Plans Include</h2>
			<div className="flex flex-wrap">
				<div className="w-1/3 p-16">

					<div
						className="inline-block shadow-lg mb-8"
						style={{backgroundColor: '#585BF2'}}
					>
						<img src="https://preview.cruip.com/spike/images/feature-tile-icon-01.svg" />
					</div>
					<h4 className="font-bold mb-4">Unlimited Requests</h4>
					<p>Request as many designs as your heart desires. Even if you’ve already submitted 100.</p>
				</div>
				<div className="w-1/3 p-16">
					<div
						className="inline-block shadow-lg mb-8"
						style={{backgroundColor: '#585BF2'}}
					>
						<img src="https://preview.cruip.com/spike/images/feature-tile-icon-01.svg" />
					</div>
					<h4 className="font-bold mb-4">Unlimited Revisions</h4>
					<p>We’ll keep editing until you think it’s absolutely perfect. We won’t stop you.</p>	
				</div>
				<div className="w-1/3 p-16">
					<div
						className="inline-block shadow-lg mb-8"
						style={{backgroundColor: '#585BF2'}}
					>
						<img src="https://preview.cruip.com/spike/images/feature-tile-icon-01.svg" />
					</div>
					<h4 className="font-bold mb-4">A Dedicated Designer</h4>
					<p>Work with your designer directly, on a first-name basis. No friction, no middlemen.</p>
				</div>
			</div>
			<div className="flex flex-wrap">
				<div className="w-1/3 p-16">
					<div
						className="inline-block shadow-lg mb-8"
						style={{backgroundColor: '#585BF2'}}
					>
						<img src="https://preview.cruip.com/spike/images/feature-tile-icon-01.svg" />
					</div>
					<h4 className="font-bold mb-4">Fast or Faster Turnaround Times</h4>
					<p>Most requests only take one or two business days — or even same-day for Pro accounts.</p>
				</div>
				<div className="w-1/3 p-16">
					<div
						className="inline-block shadow-lg mb-8"
						style={{backgroundColor: '#585BF2'}}
					>
						<img src="https://preview.cruip.com/spike/images/feature-tile-icon-01.svg" />
					</div>
					<h4 className="font-bold mb-4">24/7 Live Chat Support</h4>
					<p>Run into an issue? Just chat with our world-class support team in real time, available 24/5.</p>
				</div>
				<div className="w-1/3 p-16">
					<div
						className="inline-block shadow-lg mb-8"
						style={{backgroundColor: '#585BF2'}}
					>
						<img src="https://preview.cruip.com/spike/images/feature-tile-icon-01.svg" />
					</div>
					<h4 className="font-bold mb-4">Satisfaction Guarantee</h4>
					<p>Try us out risk-free. If you don’t love us, get a full refund with our extended 30-day risk-free trial.</p>
				</div>
			</div>
		</section>
	);
};
