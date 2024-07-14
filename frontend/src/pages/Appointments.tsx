import React from 'react';
import Header from '../components/Header/Header';
import Logo from '../assets/img/101515806.jpg';
import AppointmentView from '../components/Forms/AppointmentView/AppointmentView';
import './Pages.css';

const Appointments: React.FC = () => {
	return (
		<div className='page-container'>
			<Header
				className='page-header'
				pageTitle='Appointment Management'
			/>
			<div className='main-content'>
				<AppointmentView />
			</div>
		</div>
	);
};

export default Appointments;
