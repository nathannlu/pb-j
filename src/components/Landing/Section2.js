import React from 'react';

export default function() {
	return (
		<section className="container py-40 mx-auto">
			<div className="flex flex-wrap items-center">
				<div className="w-1/2 px-24">
					<div
						className="inline-block shadow-lg mb-8"
						style={{backgroundColor: '#585BF2'}}
					>
						<img src="https://preview.cruip.com/spike/images/feature-tile-icon-01.svg" />
					</div>
					<h3 className="pb-6">
						Dedicated professional designer.
					</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</div> 
				<div className="w-1/2 relative">
					<img 
						className="absolute" 
						src="https://preview.cruip.com/spike/images/illustration-element-03.svg"
						style={{
							content: '',
							width: '200%',
							maxWidth: '200%',
							height: '200%',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							zIndex: '-1'
						}}
					/>
					<div>
						<img src="https://preview.cruip.com/spike/images/features-split-top-01.png" />	
					</div>
				</div> 
			</div>

			<div className="flex flex-wrap items-center">
				<div className="w-1/2 relative">
					<img 
						className="absolute" 
						src="https://preview.cruip.com/spike/images/illustration-element-04.svg"
						style={{
							content: '',
							width: '200%',
							maxWidth: '200%',
							height: '200%',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							zIndex: '-1'
						}}
					/>
					<div>
						<img src="https://preview.cruip.com/spike/images/features-split-top-02.png" />	
					</div>
				</div> 
				<div className="w-1/2 px-24">
					<div
						className="inline-block shadow-lg mb-8"
						style={{backgroundColor: '#585BF2'}}
					>
						<img src="https://preview.cruip.com/spike/images/feature-tile-icon-02.svg" />
					</div>
					<h3 className="pb-6">
						Next day turnaround
					</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</div> 
			</div>
		</section>
	);
};
