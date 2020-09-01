import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

const CaseStudiesItem = props => {
	return (
		<section className="CaseStudiesItem overflow-hidden">
			<div className="divider"></div>
			<img className="image" style={{zIndex: -1}} src={props.src} />
			<div className="container mx-auto flex flex-wrap">
				<div className="w-1/2 main">
					<h4 className="uppercase pb-4">{props.caption}</h4>
					<h3>{props.title}</h3>
				</div>
				<div className="w-1/2 info">
					<h3>
						{props.description}	
					</h3>
				</div>
			</div>
		</section>
	)
};

export default CaseStudiesItem;
