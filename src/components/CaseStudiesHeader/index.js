import React from 'react';
import styles from './style.css';

const CaseStudiesHeader = () => {
	return (
		<section className="CaseStudiesHeader">
			<div className="container mx-auto flex flex-wrap">
				<h2 className="title pb-8 w-full md:w-1/2">
					Selected<br /> 
					Projects
				</h2>
				<p className="description w-full md:w-1/2">
					A selection of Branding, Content Storytelling, and Design Interaction projects.
				</p>
			</div>
		</section>
	)
};

export default CaseStudiesHeader;
