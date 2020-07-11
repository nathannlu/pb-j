import React from 'react';

export default function() {
	return (
		<section id="section-2" style={{backgroundColor: '#f5f5f5'}} className="py-40">
			<div className="container mx-auto">
				<h2 className="pb-8 text-center">Membership benefits</h2>
				<div className="flex flex-wrap">
					<div className="w-full md:w-1/3 p-16">
						<div className="mb-8">
							<img style={{height: '10rem'}} src="https://image.flaticon.com/icons/svg/2844/2844203.svg" />
						</div>
						<h4 className="font-bold mb-4">Unlimited Requests</h4>
						<p>Request as many designs as your heart desires. Even if you’ve already submitted 100.</p>
					</div>
					<div className="w-full md:w-1/3 p-16">
						<div className="mb-8">
							<img style={{height: '10rem'}} src="https://image.flaticon.com/icons/svg/2844/2844207.svg" />
						</div>
						<h4 className="font-bold mb-4">Unlimited Revisions</h4>
						<p>We’ll keep editing until you think it’s absolutely perfect. We won’t stop you.</p>	
					</div>
					<div className="w-full md:w-1/3 p-16">
						<div className="mb-8">
							<img style={{height: '10rem'}} src="https://image.flaticon.com/icons/svg/2844/2844193.svg" />
						</div>
						<h4 className="font-bold mb-4">A Dedicated Designer</h4>
						<p>Work with your designer directly, on a first-name basis. No friction, no middlemen.</p>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="w-full md:w-1/3 p-16">
						<div className="mb-8">
							<img style={{height: '10rem'}} src="https://image.flaticon.com/icons/svg/2844/2844248.svg" />
						</div>
						<h4 className="font-bold mb-4">Fast or Faster Turnaround Times</h4>
						<p>Most requests only take one or two business days — or even same-day for Pro accounts.</p>
					</div>
					<div className="w-full md:w-1/3 p-16">
						<div className="mb-8">
							<img style={{height: '10rem'}} src="https://image.flaticon.com/icons/svg/2844/2844181.svg" />
						</div>
						<h4 className="font-bold mb-4">24/7 Live Chat Support</h4>
						<p>Run into an issue? Just chat with our world-class support team in real time, available 24/5.</p>
					</div>
					<div className="w-full md:w-1/3 p-16">
						<div className="mb-8">
							<img style={{height: '10rem'}} src="https://image.flaticon.com/icons/svg/2844/2844227.svg" />
						</div>
						<h4 className="font-bold mb-4">Satisfaction Guarantee</h4>
						<p>Try us out risk-free. If you don’t love us, get a full refund with our extended 30-day risk-free trial.</p>
					</div>
				</div>
			</div>
		</section>
	);
};
