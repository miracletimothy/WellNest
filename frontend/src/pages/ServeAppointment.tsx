import React from 'react';
import Header from '../components/Header/Header';
import Logo from '../assets/img/101515806.jpg';
import AppointmentServiceForm from '../components/Forms/AppointmentService/AppointmentServiceForm';
import './Pages.css';

const ServeAppointment: React.FC = () => {
	return (
		<div className='page-container'>
			<Header
				className='page-header'
				pageTitle='Serve Appointment'
			/>
			<div className='main-content'>
				<AppointmentServiceForm />
			</div>
		</div>
	);
};

export default ServeAppointment;