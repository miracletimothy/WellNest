import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import { jwtDecode } from 'jwt-decode';
import './Pages.css';

interface DecodedUser {
	user: {
		id: string;
		firstName: string;
		lastName: string;
		profilePic: string;
		role: string;
		isVerified: boolean;
	};
}

const Profile: React.FC = () => {
	const [user, setUser] = useState<DecodedUser['user'] | null>(null);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			try {
				const decoded: DecodedUser = jwtDecode(token);

				setUser(decoded.user);
				console.log('This is a test to see the user: ', user);
			} catch (error) {
				console.log(error);
			}
		}
	}, []);

	return (
		<div className='page-container'>
			<Header
				pageTitle='Profile'
				className='header'
			/>
			<div className='main-content'>
				<h3>Profile</h3>
				{user && (
					<div>
						<img
							src={user.profilePic}
							alt='ProfilePic'
						/>
						<h3 id='username'>{user.firstName + ' ' + user.lastName}</h3>
						<p>{'Role: ' + user.role}</p>
						<p>{'Verified email: ' + user.isVerified}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Profile;
