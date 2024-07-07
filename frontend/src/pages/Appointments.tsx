import React from 'react';
import { useState } from 'react';
import '../App.css';

import MenuBar from '../components/menus/MenuBar';
import MenuButton from '../components/buttons/MenuButton';

import { OverviewIcon } from '../components/Icons';
import AppointmentOverview from '../components/appointment/AppointmentOverview';
import CreateAppointment from '../components/appointment/CreateAppointment';
import ViewAppointments from '../components/appointment/ViewAppointments';
const Appointment: React.FC = () => {
	const [contentDisplay, setContentDisplay] = useState<string>('overview');

	const RenderContentDisplay = () => {
		switch (contentDisplay) {
			case 'appointment-overview':
				return <AppointmentOverview />;
			case 'create-appointment':
				return <CreateAppointment />;
			case 'view-appointments':
				return <ViewAppointments />;
			default:
				return <AppointmentOverview />;
		}
	};
	return (
		<div className='records-page-container'>
			<div className='menu-section'>
				<MenuBar>
					<MenuButton
						icon={
							<OverviewIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						title='Overview'
						onClick={() => setContentDisplay('appointment-overview')}
					/>
					<MenuButton
						icon={
							<OverviewIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						title='Create'
						onClick={() => setContentDisplay('create-appointment')}
					/>
					<MenuButton
						icon={
							<OverviewIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						title='Overview'
						onClick={() => setContentDisplay('view-appointments')}
					/>
				</MenuBar>
			</div>
			<div className='content-display'>{<RenderContentDisplay />}</div>
		</div>
	);
};

export default Appointment;
