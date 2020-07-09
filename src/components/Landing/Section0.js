import React from 'react';

export default function() {
	return (
		<section id="section-2" style={{backgroundColor: '#f5f5f5'}} className="py-40">
			<div className="container mx-auto">
				<h2 className="pb-8 text-center">
					What we do.
				</h2>
				<div className="flex flex-wrap text-center">
					<div className="w-full md:w-1/3 p-16">
						<div
							className="inline-block shadow-lg mb-8"
							style={{backgroundColor: '#585BF2'}}
						>
							<img src="https://preview.cruip.com/spike/images/feature-tile-icon-01.svg" />
						</div>
						<h4 className="font-bold mb-4">Dedicated designers</h4>
						<p>We’ll keep editing until you think it’s absolutely perfect. We won’t stop you.</p>	
					</div>

					<div className="w-full md:w-1/3 p-16">
						<div
							className="inline-block shadow-lg mb-8"
							style={{backgroundColor: '#585BF2'}}
						>
							<img src="https://preview.cruip.com/spike/images/feature-tile-icon-01.svg" />
						</div>
						<h4 className="font-bold mb-4">Unlimited Design & Revisions</h4>
						<p>Request as many designs as your heart desires. Even if you’ve already submitted 100.</p>
					</div>

					<div className="w-full md:w-1/3 p-16">
						<div
							className="inline-block shadow-lg mb-8"
							style={{backgroundColor: '#585BF2'}}
						>
							<img src="https://preview.cruip.com/spike/images/feature-tile-icon-01.svg" />
						</div>
						<h4 className="font-bold mb-4">24 hour turnover rate</h4>
						<p>Work with your designer directly, on a first-name basis. No friction, no middlemen.</p>
					</div>
				</div>
			</div>
		</section>
	);
};
