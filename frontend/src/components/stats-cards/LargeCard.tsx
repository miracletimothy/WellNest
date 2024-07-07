import React from 'react';
import '../../App.css';

const LargeCard: React.FC = () => {
	return (
		<div className='large-card'>
			<div className='large-card-data'>
				<div className='card-data'>
					<h4>Appointment Weekly Distribution</h4>
				</div>
				<div className='data'>{/* <p>CHART OR GRAPH</p> */}</div>
			</div>
		</div>
	);
};

export default LargeCard;
