import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.theme.default.css';

const options = {
	items: 3,
	nav: true,
	loop: true,
	autoplay: true,
	stagePadding: 200, 
	navElement: 'button',
	navText: ['‹', '›']
};

export default function() {
	return (
		<div id="section-4" className="overflow-hidden flex flex-wrap mb-12 py-40">
			<div className="px-4 md:px-0 container mx-auto pb-16">
				<div className="w-full md:w-1/2">
					<div className="flex items-center pb-8">
						<img src="https://emotive.io/assets/icons/icon-tin.svg" />
						<h6 
							className="pl-8" 
							style={{textTransform: 'uppercase', fontSize: '1.4rem', fontWeight: 'bold', opacity: .8}}
						>
							Past work
						</h6>
					</div>
					<h2 className="pb-6">
						 Check out some of our work 	
					</h2>
					<p>
						Whether it’s a new logo, marketing materials, advertisements, or website/app design,
						there's always a qualified designer for the job.
					</p>
				</div>
		{/*
				<div className="w-full pt-8">
					<button className="btn btn-black">See more work</button>
				</div>
		*/}
			</div>
			<div className="w-full">
				<OwlCarousel options={options} className="flex flex-wrap relative">
					<div className="w-full block bg-red-100"><img src="https://cdn.dribbble.com/users/757683/screenshots/11932184/media/010349de88cff4894e7bef70d63e0fbf.jpg" /></div>
					<div className="w-full block bg-red-100"><img src="https://cdn.dribbble.com/users/757683/screenshots/11290151/media/564e0dcbe81023f726ceaa85ba91b44f.jpg" /></div>
					<div className="w-full block bg-red-100"><img src="https://cdn.dribbble.com/users/757683/screenshots/10847785/media/c385e04cb6c421c748b12d301730bd41.jpg" /></div>
					<div className="w-full block bg-red-100"><img src="https://cdn.dribbble.com/users/757683/screenshots/10970419/media/26a6a2b7e710f1ff9d3d6ba4a7328f04.jpg" /></div>
					<div className="w-full block bg-red-100"><img src="https://cdn.dribbble.com/users/757683/screenshots/7333583/media/133520cf4e04becae97e87b5e68c7dbf.jpg" /></div>
					<div className="w-full block bg-red-100"><img src="https://cdn.dribbble.com/users/757683/screenshots/7161093/media/9cd8daa79627a7d3116a79a121257181.jpg" /></div>
				</OwlCarousel>
			</div>
			{/*
			<div className="w-1/3 px-6">
				<div className="shadow-lg border rounded-md">
					<img src="https://cdn.dribbble.com/users/1545448/screenshots/4803348/pod.png" />	
				</div>
			</div>
			<div className="w-1/3 px-6">
				<div className="shadow-lg border rounded-md">
					<img src="https://cdn.dribbble.com/users/6921/screenshots/7038279/media/8af0ee9d9948ee88e43039cf7eb7f1ba.png" />	
				</div>
			</div>
			<div className="w-1/3 px-6">
				<div className="shadow-lg border rounded-md">
					<img src="https://cdn.dribbble.com/users/1545448/screenshots/4035937/canvas_ad.png" />	
				</div>
			</div>
			*/}
		</div>
	);
};
