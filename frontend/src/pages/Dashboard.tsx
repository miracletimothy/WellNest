import React from 'react';
import { AnalyticsIcon } from '../components/Icons';
import MediumCard from '../components/stats-cards/MediumCard';
import SmallCard from '../components/stats-cards/SmallCard';
import LargeCard from '../components/stats-cards/LargeCard';

import '../App.css';

const Dashboard: React.FC = () => {
	return (
		<div className='Dashboard'>
			<h2>Dashboard</h2>
			<div className='dashboard-content'>
				<div className='medium-stat-cards'>
					<MediumCard
						icon={
							<AnalyticsIcon
								className='ButtonIcons'
								height='40px'
								width='40px'
							/>
						}
						statName='Sheduled Appointments'
						statValue={0}
						description='appointments'
						className='medium-card'
					/>
					<MediumCard
						icon={
							<AnalyticsIcon
								className='ButtonIcons'
								height='40px'
								width='40px'
							/>
						}
						statName='Missed/Canceled Appointments'
						statValue={0}
						description='appointments'
						className='medium-card'
					/>
					<MediumCard
						icon={
							<AnalyticsIcon
								className='ButtonIcons'
								height='40px'
								width='40px'
							/>
						}
						statName='Total Active Chats'
						statValue={15}
						description='chats'
						className='medium-card'
					/>
					<MediumCard
						icon={
							<AnalyticsIcon
								className='ButtonIcons'
								height='40px'
								width='40px'
							/>
						}
						statName='Average Response Time'
						statValue={5}
						description='seconds'
						className='medium-card'
					/>
					{/* <MediumCard
						icon={<AnalyticsIcon />}
						statName='Velocity'
						statValue={100}
						description='Number of App/s'
						className='medium-card'
					/> */}
				</div>
				<div className='small-stat-cards'>
					<SmallCard
						icon={
							<AnalyticsIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						statName='Documents'
						statValue='10'
						className='small-card'
					/>
					<SmallCard
						icon={
							<AnalyticsIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						statName='Videos'
						statValue='3'
						className='small-card'
					/>
					<SmallCard
						icon={
							<AnalyticsIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						statName='Photos'
						statValue='4'
						className='small-card'
					/>
					<SmallCard
						icon={
							<AnalyticsIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						statName='Audios'
						statValue='1'
						className='small-card'
					/>
				</div>
				<div className='large-stat-cards'>
					<LargeCard />
					{/* <LargeCard /> */}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
