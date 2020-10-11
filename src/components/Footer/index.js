import React from 'react';
import styles from './style.css';

const Footer = () => {
	return (
		<>
			<hr style={{marginLeft: '7.2rem'}} />
			<footer>
				<div className="container mx-auto flex flex-wrap">
					<div className="w-full md:w-1/2">
						<h2>
							Ready to<br /> 
							work with us?
						</h2>
						<button className="py-4 px-8 mt-20 bg-black text-white" style={{fontSize: '1.8rem', fontWeight: 500}}>
							Contact Us
						</button>
					</div>
				</div>
			</footer>
		</>
	)
};

export default Footer;
