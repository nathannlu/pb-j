import React, {useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const TextReveal = props => {
	return (
		<motion.div
			width={'100%'}
			height={72*1.2}
			style={{overflow:'hidden'}}
		>	
			<motion.h1 
				className="text-white"
				initial={{y:72*1.2}}
				animate={{y:0}}
				transition={{ease:'easeOut', duration: .7}}
			>
				{props.text}
			</motion.h1>
		</motion.div>
	)
};

const Header = () => { 
	return (
		<section className="h-screen text-white" style={{backgroundColor: '#212121'}}>
			<div className="container mx-auto h-full flex items-center">
				<div className="w-2/3">
					<h4 className="text-white pb-6">
						Hi there, we're pb+j creative.
					</h4>

						<TextReveal
							text="We create modern"	
						/>
						<TextReveal
							text="experiences for"
						/>
						<TextReveal
							text="tomorrow's brands"
						/>

						{/*
						<motion.h1 
							className="text-white"
							initial={{y:72*1.2}}
							animate={{y:0}}
						>
							experiences for
						</motion.h1>
						<motion.h1 
							className="text-white"
							initial={{y:72*1.2}}
							animate={{y:0}}
						>
						 tomorrow’s brands.
						</motion.h1>
						*/}
				</div>
			</div>
		</section>
	)
}

export default Header;
