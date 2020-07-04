import React, {useState, useEffect} from 'react';

export default function() {
	const [stage, setStage] = useState(0);
	const steps = [
		'Make a request',
		'Drafts & revisions',
		'Complete & download'
	];

	return (
		<section className="py-40">
			<div className="w-1/2 px-40 mx-auto text-center">
				<div className="pb-16">
					<img className="mx-auto mb-6" src="http://pixelcurve.epizy.com/rappix-live/image/img-art.png" />
					<h2 className="pb-6">
						The simplest way to get good designs.
					</h2>
					<p className="pb-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.
					</p>
				</div>
			</div>
			<div className="container mx-auto flex flex-wrap">
				<div className="w-4/5 pr-4">
					{{
						0: <img className="shadow-xl rounded-lg border" src="/dashboard-1.png" />,
						1: <img src="https://preview.cruip.com/cube/images/hero-image.png" />,
						2: <img src="https://preview.cruip.com/cube/images/hero-image.png" />,
					}[stage]}
				</div>
				<div className="w-1/5">
					<ul>
						{steps.map((step,i) => (
							<li
								className="p-8 rounded-lg"
								key={i}
								onClick={() => setStage(i)}
								style={stage == i ? {fontWeight: 'bold', color:'white', backgroundColor: '#585BF2'} : {color: '#999'}}
							>
								{step}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
