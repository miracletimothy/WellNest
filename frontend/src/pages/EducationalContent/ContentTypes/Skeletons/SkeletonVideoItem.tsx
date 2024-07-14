import React from 'react';
import './SkeletonVideoItem.css';

const SkeletonVideoItem: React.FC = () => {
	return (
		<div className='skeleton-video-item'>
			<div className='skeleton-thumbnail'></div>
			<div className='skeleton-title'></div>
		</div>
	);
};

export default SkeletonVideoItem;
