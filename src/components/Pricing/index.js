import React from 'react';
import Navbar from '../Navbar';
import Header from './Header';

import Section2 from './Section2';
import Footer from '../Footer';

const Pricing = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<Section2 />
			<div className="pt-24">
				<Footer />
			</div>
		</div>
	)
};

export default Pricing;
