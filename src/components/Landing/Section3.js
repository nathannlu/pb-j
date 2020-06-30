import React from 'react';

export default function() {
	return (
		<section style={{backgroundColor: '#f5f5f5'}}>
			<div className="w-2/3 mx-auto py-40 px-24">
				<div className="w-1/2 pb-24 mx-auto text-center">
					<div
						className="inline-block shadow-lg mb-8"
						style={{backgroundColor: '#585BF2'}}
					>
						<img src="https://preview.cruip.com/spike/images/feature-tile-icon-01.svg" />
					</div>

					<h2 className="pb-6">
						Trusted the world over
					</h2>
					<p className="">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. 
					</p>
				</div>

				<div className="w-full bg-white shadow-lg flex flex-wrap">
					<div className="w-1/3">
						<img src="/lockie.png" className="" style={{objectFit: 'cover'}} />
					</div>

					<div className="h-full flex-1 p-16 items-center">
						<div>
							<h3 className="pb-6">
								HostGenius
							</h3>
							<p className="pb-24">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<p className="font-bold">
								Charles Mullany
							</p>
							<p>
								CEO of HostGenius
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
