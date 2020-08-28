import React from 'react';
import './style.css';

const MenuBar = () => {
	return (
		<div className="MenuBar">
			<div className="absolute p-4 pt-12 left-0">
				<img src="/logo-white.png" />
			</div>
			<div className="line">
				<div className="background"></div>
			</div>
		</div>
	)
};

export default MenuBar;
