import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './style.css';

const CaseStudiesItem = props => {
	return (
		<Link to={props.url} className="CaseStudiesItem overflow-hidden">
			<div className="divider"></div>
			<img className="image" style={{zIndex: -1}} src={props.src} />
			<div className="container mx-auto flex flex-wrap h-screen md:h-auto">
				<div className="w-full md:w-1/2 main">
					<h4 className="uppercase pb-4">{props.caption}</h4>
					<h3 className="title">{props.title}</h3>
				</div>
				<div className="w-full md:w-1/2 info">
					<h3 className="description">
						{props.description}	
					</h3>
				</div>
			</div>
		</Link>
	)
};

export default CaseStudiesItem;
