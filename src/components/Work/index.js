import React from 'react';
import Navbar from '../Navbar';
import Header from './Header';
import Section1 from './Section1';
import Footer from '../Footer';

export default function() {
	return(
		<>
			<Navbar />
			<Header />
			<Section1 />
			<div className="pt-24">
				<Footer />
			</div>
		</>
	);
};
