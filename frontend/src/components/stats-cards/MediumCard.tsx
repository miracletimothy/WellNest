import React from 'react';
import '../../App.css';

interface StatCardProps {
	icon: React.ReactNode;
	statName: string;
	statValue: number | string;
	description: string;
	className: string;
}

const MediumCard: React.FC<StatCardProps> = ({
	icon,
	statName,
	statValue,
	description,
	className,
}) => {
	return (
		<div className={`card ${className}`}>
			<div className='stat-data'>
				<div className='stat-icon'>{icon}</div>
				<div className='stat-data'>
					<h4 className='stat-name'>{statName}</h4>
					<p className='stat-value'>{statValue}</p>
				</div>
			</div>
			<p className='stat-description'>{description}</p>
		</div>
	);
};

export default MediumCard;
