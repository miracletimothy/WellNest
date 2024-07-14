import React from 'react';
import './SkeletonImageItem.css';

const SkeletonImage: React.FC = () => {
	return (
		<div className='skeleton-image-item'>
			<div className='skeleton-thumbnail'></div>
			<div className='skeleton-title'></div>
		</div>
	);
};

export default SkeletonImage;
