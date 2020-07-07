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
			<div className="container mx-auto flex flex-wrap">
				<div className="w-2/5 pr-16">
					<div className="pb-16">
						<div className="flex items-center pb-8">
							<img src="https://emotive.io/assets/icons/icon-tin.svg" />
							<h6 
								className="pl-8" 
								style={{textTransform: 'uppercase', fontSize: '1.4rem', fontWeight: 'bold', opacity: .8}}
							>
								How it works	
							</h6>
						</div>
						<h2 className="pb-6">
							The simplest way to get good designs.
						</h2>
						<p className="pb-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.
						</p>
					</div>

					<ul>
						{steps.map((step,i) => (
							<li
								className="p-8 rounded-lg"
								key={i}
								onClick={() => setStage(i)}
								style={stage == i ? {fontWeight: 'bold', color:'white', backgroundColor: '#4746E0'} : {color: '#999'}}
							>
								{step}
							</li>
						))}
					</ul>
				</div>
				<div className="w-3/5">
					{{
						0: <img className="shadow-xl rounded-lg border" src="/dashboard-1.png" />,
						1: <img src="https://preview.cruip.com/cube/images/hero-image.png" />,
						2: <img src="https://preview.cruip.com/cube/images/hero-image.png" />,
					}[stage]}
				</div>

			</div>
		</section>
	);
};
