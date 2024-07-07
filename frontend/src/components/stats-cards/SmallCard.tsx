import React from 'react';
import '../../App.css';

interface SmallCardProps {
	icon: React.ReactNode;
	statName: string;
	statValue: string;
	className: string;
}

const SmallCard: React.FC<SmallCardProps> = ({
	icon,
	statName,
	statValue,
	className,
}) => {
	return (
		<div className={`card ${className}`}>
			<div className='small-card-data'>
				<div className='small-card-icon'>{icon}</div>
				<div className='card-data'>
					<h4>{statName}</h4>
					<p>{statValue}</p>
				</div>
			</div>
		</div>
	);
};

export default SmallCard;
