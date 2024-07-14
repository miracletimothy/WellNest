import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AppointmentServiceForm.css';

interface Appointment {
	id: number;
	firstName: string;
	lastName: string;
	description: string;
	dateTime: string;
	approved: boolean;
}

const initialAppointments: Appointment[] = [
	{
		id: 1,
		firstName: 'John',
		lastName: 'Doe',
		description: 'Regular checkup',
		dateTime: '2024-07-15T10:30:00',
		approved: true,
	},
	{
		id: 2,
		firstName: 'Jane',
		lastName: 'Smith',
		description: 'Follow-up consultation',
		dateTime: '2024-07-16T15:00:00',
		approved: false,
	},
	// Add more sample appointments as needed
];

const AppointmentServiceForm: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [appointment, setAppointment] = useState<Appointment | undefined>(
		undefined,
	);

	useEffect(() => {
		const foundAppointment = initialAppointments.find(
			app => app.id === parseInt(id),
		);
		setAppointment(foundAppointment);
	}, [id]);

	if (!appointment) {
		return <div>Loading...</div>;
	}

	return (
		<div className='appointment-view'>
			<h2 className='heading'>Appointment #{appointment.id}</h2>
			<section className='appointment-form'>
				<form>
					<div>
						<p>Appointment Details</p>
					</div>
					<div className='entry'>
						<label htmlFor='appointment-id'>Appointment ID</label>
						<input
							type='text'
							value={appointment.id}
							readOnly
						/>
					</div>
					<div className='entry'>
						<label htmlFor='first-name'>First Name</label>
						<input
							type='text'
							value={appointment.firstName}
							readOnly
						/>
					</div>
					<div className='entry'>
						<label htmlFor='last-name'>Last Name</label>
						<input
							type='text'
							value={appointment.lastName}
							readOnly
						/>
					</div>
					<div className='entry'>
						<label htmlFor='description'>Description</label>
						<input
							type='text'
							value={appointment.description}
							readOnly
						/>
					</div>
					<div className='entry'>
						<label htmlFor='date'>Date</label>
						<input
							type='date'
							value={appointment.dateTime.split('T')[0]}
							readOnly
						/>
					</div>
					<div className='entry'>
						<label htmlFor='time'>Time</label>
						<input
							type='time'
							value={appointment.dateTime.split('T')[1]}
							readOnly
						/>
					</div>
				</form>
			</section>
			<div className='actions'>
				<button onClick={() => console.log('Approved')}>Approve</button>
				<button onClick={() => console.log('Declined')}>Decline</button>
			</div>
		</div>
	);
};

export default AppointmentServiceForm;
