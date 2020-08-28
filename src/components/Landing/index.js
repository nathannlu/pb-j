import React from 'react';
import Header from './Header';
import MenuBar from '../MenuBar';
import CaseStudiesHeader from '../CaseStudiesHeader';
import CaseStudiesItem from '../CaseStudiesItem';

export default function() {
	return (
		<>
			<MenuBar />
			<Header />
			<CaseStudiesHeader />
			<CaseStudiesItem
				caption="Creative Technology"
				title="HostGenius"
				description="A brand revamp that demystifies HostGenius' mission."
				src="/hostgenius-cover.png"
			/>
			<CaseStudiesItem
				caption="Creative Technology"
				title="ThriveBar"
				description="Rethinking the accessibility of beauty services."
				src="/thrivebar-cover.png"
			/>
			<CaseStudiesItem
				caption="Creative Technology"
				title="gARden"
				description="Gardening meets AR meets community building."
				src="/garden-cover.png"
			/>
			<CaseStudiesItem
				caption="Creative Technology"
				title="Assemble"
				description="Meet the little fuck that's redefining watercooler conversations."
				src="/garden-cover.png"
			/>
		</>
	);
};
