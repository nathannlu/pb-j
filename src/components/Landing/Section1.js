import React, {useState, useEffect} from 'react';

export default function() {
	const [stage, setStage] = useState(0);
	const steps = [
		'01. Make a request',
		'02. Drafts & revisions',
		'03. Complete & download'
	];

	return (
		<section id="section-1" className="pt-40 overflow-hidden">
			<div className="container mx-auto flex flex-wrap">
				<div className="w-full md:w-2/5 pr-16">
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
							With Graaphic you can request as many designs as needed — even if you’ve already submitted 100. Plus with unlimited revisions, we’ll keep designing until it’s perfect.
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
				<div className="w-full md:w-3/5" style={{height: '76rem'}}>
					{{
						0: <img className="shadow-xl rounded-lg border" style={{borderBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}} src="/dashboard-1.png" />,
						1:<img className="shadow-xl rounded-lg border" style={{borderBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}} src="/dashboard-2.png" />,
						2: <img className="shadow-xl rounded-lg border" style={{borderBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}} src="/dashboard-3.png" />,
					}[stage]}
				</div>
			</div>
		</section>
	);
};
