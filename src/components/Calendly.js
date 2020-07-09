import React from 'react';
import {PopupText} from 'react-calendly';

export default function() {
	return (
		<PopupText
			pageSettings={{
				backgroundColor: 'ffffff',
				hideEventTypeDetails: false,
				hideLandingPageDetails: false,
				primaryColor: '00a2ff',
				textColor: '4d5055'
			}}
			prefill={{
				customAnswers: {
					a1: 'a1',
					a10: 'a10',
					a2: 'a2',
					a3: 'a3',
					a4: 'a4',
					a5: 'a5',
					a6: 'a6',
					a7: 'a7',
					a8: 'a8',
					a9: 'a9'
				},
				email: 'test@test.com',
				firstName: 'Jon',
				lastName: 'Snow',
				name: 'Jon Snow'
			}}
			text="Schedule Demo"
			url="https://calendly.com/graaphic"
			utm={{
				utmCampaign: 'Spring Sale 2019',
				utmContent: 'Shoe and Shirts',
				utmMedium: 'Ad',
				utmSource: 'Facebook',
				utmTerm: 'Spring'
			}}
		/>
	);
};
