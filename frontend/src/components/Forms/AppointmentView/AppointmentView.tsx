import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AppointmentView.css';

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

const AppointmentView: React.FC = () => {
	const [appointments] = useState<Appointment[]>(initialAppointments);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [filterCriteria, setFilterCriteria] = useState<string>('all'); // Example: 'all', 'approved', 'pending'
	const history = useHistory();

	// Filter appointments based on search query and filter criteria
	const filteredAppointments = appointments.filter(appointment => {
		const fullName =
			`${appointment.firstName} ${appointment.lastName}`.toLowerCase();
		const searchLower = searchQuery.toLowerCase();
		if (searchQuery && !fullName.includes(searchLower)) {
			return false;
		}
		if (filterCriteria === 'approved' && !appointment.approved) {
			return false;
		}
		if (filterCriteria === 'pending' && appointment.approved) {
			return false;
		}
		return true;
	});

	// Handle row click
	const handleRowClick = (id: number) => {
		history.push(`/appointments/${id}`);
	};

	return (
		<div className='appointment-view'>
			<h2 className='heading'>Appointments</h2>
			<section className='filters-container'>
				<div className='filters'>
					<input
						type='text'
						placeholder='Search by name...'
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
					/>
					<select
						value={filterCriteria}
						onChange={e => setFilterCriteria(e.target.value)}>
						<option value='all'>All</option>
						<option value='approved'>Approved</option>
						<option value='pending'>Pending</option>
					</select>
				</div>
			</section>
			<table className='appointment-table'>
				<thead>
					<tr>
						<th className='hide-on-smallest-screens'>Appointment ID</th>
						<th className='hide-on-smaller-screens'>First Name</th>
						<th className='hide-on-small-screens'>Last Name</th>
						<th>Description</th>
						<th>Date Time</th>
					</tr>
				</thead>
				<tbody>
					{filteredAppointments.map(appointment => (
						<tr
							key={appointment.id}
							onClick={() => handleRowClick(appointment.id)}>
							<td className='hide-on-smallest-screens'>{appointment.id}</td>
							<td className='hide-on-smaller-screens'>
								{appointment.firstName}
							</td>
							<td className='hide-on-small-screens'>{appointment.lastName}</td>
							<td>{appointment.description}</td>
							<td>{appointment.dateTime}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AppointmentView;
