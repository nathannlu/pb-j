import React from 'react';
import Navbar from '../Navbar';
import Header from './Header';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './_Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Footer from '../Footer';

export default function() {
	return (
		<>
			<Navbar />
			<Header />
			<Section1 />
			<hr />
			<Section2 />
			<Section3 />
			<Section4 />
			<div className="pt-24">
				<Footer />
			</div>
		</>
	);
};
