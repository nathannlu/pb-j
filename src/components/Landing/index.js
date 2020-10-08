import React from 'react';
import Header from './Header';
import Footer from '../Footer';
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
				caption="Design & Development"
				title="HostGenius"
				description="A brand revamp that demystifies HostGenius' mission."
				src="/hostgenius-cover.png"
				url="/work/hostgenius"
			/>
			<CaseStudiesItem
				caption="Design & Development"
				title="ThriveBar"
				description="Rethinking the accessibility of beauty services."
				src="/thrivebar-cover.png"
			/>
			<CaseStudiesItem
				caption="Design & Development"
				title="Teamtown"
				description="Dashboard for founders to build their company upon"
				src="/teamtown-cover.png"
				url="/work/teamtown"
			/>
			<Footer />
		</>
	);
};
