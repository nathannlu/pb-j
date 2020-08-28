import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => { 
	return (
		<section className="h-screen text-white" style={{backgroundColor: '#212121'}}>
			<div className="container mx-auto h-full flex items-center">
				<div className="w-2/3">
					<h4 className="text-white pb-6">
						Hi there, we're pb+j creative.
					</h4>
					<h1 className="text-white">
						We create modern experiences for tomorrow’s brands.
					</h1>
				</div>
			</div>
		</section>
	)
}

export default Header;
