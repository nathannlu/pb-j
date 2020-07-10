import React from 'react';

export default function() {
	return (
		<section id="section-0" style={{backgroundColor: '#fff'}} className="py-40">
			<div className="container mx-auto">
				<div className="flex items-center pb-8">
					<div className="flex items-center pr-24 mx-auto">
						<img src="https://emotive.io/assets/icons/icon-tin.svg" />
						<h6 
							className="pl-8" 
							style={{textTransform: 'uppercase', fontSize: '1.4rem', fontWeight: 'bold', opacity: .8}}
						>
							What is Graaphic?
						</h6>
					</div>
				</div>
				<h2 className="pb-6 w-1/2 mx-auto text-center">
					Unlimited Graphic Design at a Fixed Monthly Price
				</h2>
				<div className="flex flex-wrap text-center">
					<div className="w-full md:w-1/3 p-16">
						<div className="mb-8">
							<img className="mx-auto" style={{height: '10rem'}} src="https://image.flaticon.com/icons/svg/2844/2844506.svg" />
						</div>
						<h4 className="font-bold mb-4">Dedicated designers</h4>
						<p>Work with your designer directly, on a first-name basis. No friction, no middlemen.</p>
					</div>

					<div className="w-full md:w-1/3 p-16">
						<div className="mb-8">
							<img className="mx-auto" style={{height: '10rem'}} src="https://image.flaticon.com/icons/svg/2844/2844540.svg" />
						</div>
						<h4 className="font-bold mb-4">Unlimited Design & Revisions</h4>
						<p>Request as many designs as your heart desires. Even if you’ve already submitted 100.</p>
					</div>

					<div className="w-full md:w-1/3 p-16">
						<div className="mb-8">
							<img className="mx-auto" style={{height: '10rem'}} src="https://image.flaticon.com/icons/svg/2844/2844618.svg" />
						</div>
						<h4 className="font-bold mb-4">24 hour turnover rate</h4>
						<p>Most requests only take one or two business days — or even same-day for Pro accounts.</p>
					</div>
				</div>
			</div>
		</section>
	);
};
