import React from 'react'; 
import MenuBar from '../MenuBar';
import Footer from '../Footer';
import './style.css';

const HostGenius = () => {
	return (
		<div>
			<MenuBar />
			<header className="h-screen text-white" style={{backgroundImage:'url(/hostgenius-hero.png)', backgroundSize: 'cover'}}>
				<div className="container mx-auto h-full flex items-center">
					<div className="w-full md:w-2/3">
						<h4 className="text-white uppercase pb-6">
							Design & Development 
						</h4>
		
						<h1>
							A brand revamp that demystifies HostGenius’ mission.
						</h1>

							{/*
							<motion.h1 
								className="text-white"
								initial={{y:72*1.2}}
								animate={{y:0}}
							>
								experiences for
							</motion.h1>
							<motion.h1 
								className="text-white"
								initial={{y:72*1.2}}
								animate={{y:0}}
							>
							 tomorrow’s brands.
							</motion.h1>
							*/}
					</div>
				</div>
			</header>
			<section className="py-32 container mx-auto">
				<div className="w-full md:w-2/3 mx-auto">
					<h3 className="pb-8">
						Helping HostGenius Expand with a Strong Brand.
					</h3>
					<p className="pb-8">
						HostGenius is the #1 Vancouver short-term Airbnb rental management service that provides a seamless hosting experience.
					</p>
					<p className="pb-8">
						As HostGenius is looking to expand their services, there is a mis-match between the company’s current visual identity and the target audience.
					</p>
					<p className="pb-8">
						We developed the visual identity, website, and media asset with the goal of building a commuity.
					</p>
				</div>
			</section>
			<div>
				<img className="w-full" src="/hostgenius-asset-1.png" />	
				<div className="flex flex-wrap">
					<img className="w-1/3" src="/hostgenius-asset-2.png" />
					<img className="w-1/3" src="/hostgenius-asset-3.png" />
					<img className="w-1/3" src="/hostgenius-asset-4.png" />
				</div>
			</div>
			<section className="py-32 container mx-auto">
				<div className="w-full md:w-2/3 mx-auto">
					<h3 className="pb-8">
						Aligning website with their brand.
					</h3>
					<p className="pb-8">
						Property management has become very corporate, we helped HostGenius differentiate themselves by being more humane with a youthful but professional injection.
					</p>
				</div>
			</section>
			<div>
				<div className="flex flex-wrap">
					<img className="w-1/2" src="/hostgenius-asset-5.png" />
					<img className="w-1/2" src="/hostgenius-asset-6.png" />
				</div>
				<img className="w-full" src="/hostgenius-asset-7.png" />	
			</div>
			<section className="py-32 container mx-auto">
				<div className="w-full md:w-2/3 mx-auto">
					<h3 className="pb-8">
						Conclusion
					</h3>
					<p className="pb-8">
						After discovering HostGenius' painpoints, we came up with a creative approach that focused on making their website as straightforward as possible.
					</p>
					<a target="_blank" href="https://hostgenius.ca" className="py-4 px-8 mt-8 bg-black text-white" style={{fontSize: '1.8rem', fontWeight: 500}}>
						Visit hostgenius.ca
					</a>
				</div>
			</section>
			<Footer />
		</div>
	)
};

export default HostGenius;
