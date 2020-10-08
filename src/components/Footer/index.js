import React from 'react';
import styles from './style.css';

const Footer = () => {
	return (
		<section>
			<hr />
			<div className="CaseStudiesHeader">
				<div className="container mx-auto flex flex-wrap">
					<div className="w-1/2">
						<h2 className="">
							Ready to<br /> 
							work with us?
						</h2>
						<button className="py-4 px-8 mt-20 bg-black text-white" style={{fontSize: '1.8rem', fontWeight: 500}}>
							Contact Us
						</button>
					</div>
				</div>
			</div>
		</section>
	)
};

export default Footer;
