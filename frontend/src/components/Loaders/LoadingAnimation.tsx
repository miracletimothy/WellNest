import React from 'react';
import logo from '../../assets/logo/icon.png';
import './LoadingAnimation.css'; // Adjust the path based on your project structure

const LoadingAnimation: React.FC = () => {
	return (
		<div className='loading-container'>
			<div className='logo-pulse'>
				<img
					src={logo}
					alt='Logo'
					className='logo-image'
				/>
			</div>
			<div className='loading-circle'></div>
		</div>
	);
};

export default LoadingAnimation;
