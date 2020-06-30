import React from 'react';
import Navbar from '../Navbar';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Footer from '../Footer';

const Pricing = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<Section1 />
			<hr />
			<Section2 />
			<div className="pt-24">
				<Footer />
			</div>
		</div>
	)
};

export default Pricing;
