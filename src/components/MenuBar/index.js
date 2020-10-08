import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion, useViewportScroll, } from 'framer-motion';
import './style.css';

const MenuBar = () => {
	const [navOpen, setNavOpen] = useState(false);
	const [scrollbarHeight, setScrollbarHeight] = useState(0);
	const [scrollbarPos, setScrollbarPos] = useState(0);
	const {scrollY, scrollYProgress} = useViewportScroll();

	const variants = {
		open: { x: '100%' },
		closed: { x: 0 }
	}

	useEffect(() => {
		setScrollbarHeight(window.innerHeight / window.document.body.offsetHeight)
	}, [])


	window.addEventListener('scroll', () => {
		console.log('scroll y progress', scrollYProgress.current);	
		console.log('scrollbar height', scrollbarHeight);

		setScrollbarPos(scrollYProgress.current * -(scrollbarHeight - 1) * 100);
	})

	return (
		<div className="MenuBar">
			<div className="absolute p-4 pt-12 left-0 h-full">
				<Link to="/">
					<img src="/logo.png" />
				</Link>
				{/*
				<div
					onClick={() => setNavOpen(true)}
					className="absolute"
					style={{height: '50px', width: '50px', backgroundColor: 'white', transform: 'translateY(-50%)', top: '50%'}}
				></div>
				*/}
			</div>
			<div className="line">
				<div className="background"></div>
				{/*
				<motion.div 
					className="scrollbar absolute w-full" 
					animate={{top: `${scrollbarPos}%`}}
					transition={{
						duration: 0.01
					}}
					style={{transform: `scale(1, ${scrollbarHeight})`}} 
				/>
				*/}
			</div>

			{/*
			<motion.div
				animate={navOpen ? 'open' : 'closed'}
				variants={variants}
				transition={{
					ease: [0, 1, .5, 1],
					duration: .7  
				}}
				style={{height: '100vh', width: '100vw', left: '-100vw', top: 0, backgroundColor: 'white', position: 'absolute'}}
			>
				<div onClick={() => setNavOpen(false)}>
					X
				</div>
			</motion.div>
			*/}
		</div>
	)
};

export default MenuBar;
