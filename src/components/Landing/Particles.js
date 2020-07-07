import React from 'react';
import Particles from 'react-particles-js';

const params = {
	particles: {
			number: {
				"value": 35,
			},
			line_linked: {
				"enable": false
			},
			move: {
				"speed": .5,
				"out_mode": "out"
			},
			shape: {
				type: [
						"image",
				],
				image: [
					{src: '/particles/01.svg', height: 20, width: 20},
					{src: '/particles/02.svg', height: 20, width: 20},
					{src: '/particles/03.svg', height: 20, width: 20},
					{src: '/particles/04.svg', height: 20, width: 20},
					{src: '/particles/05.svg', height: 20, width: 20},
					{src: '/particles/06.svg', height: 20, width: 20},
					{src: '/particles/07.svg', height: 20, width: 20},
					{src: '/particles/08.svg', height: 20, width: 20},
					{src: '/particles/09.svg', height: 20, width: 20},
				]
			},
			size: {
				value: 30,
				minValue: 20,
				random: true,
				anim: {
					enable: false,
				}
			},
			opacity: {
				value: .9,
				anim: {
					enable: false
				}
			},
			rotate: {
				random: true,
			},
	},
	"retina_detect": false
};

export default function() {
	return (
		<Particles
			params={params}
			style={{
			}}
		/>
	);
};
