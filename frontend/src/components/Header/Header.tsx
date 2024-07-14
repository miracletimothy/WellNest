import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import { jwtDecode } from 'jwt-decode';

interface HeaderProps {
	pageTitle: string;
	className: string;
}

interface DecodedUser {
	user: {
		firstName: string;
		profilePic: string;
	};
}

const Header: React.FC<HeaderProps> = ({ pageTitle, className }) => {
	const [user, setUser] = useState<DecodedUser['user'] | null>(null);

	const history = useHistory();

	const handleClick = () => {
		history.push('/profile');
	};

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			try {
				const decoded: DecodedUser = jwtDecode(token);
				console.log('This is the user:', decoded.user);
				setUser(decoded.user);
			} catch (error) {
				console.error('Failed to decode token:', error);
				// Handle token decode error (e.g., clear token, redirect to login)
			}
		}
	}, []);

	return (
		<div className={`header ${className}`}>
			<span>{pageTitle}</span>
			{user && (
				<div
					className='profile-button'
					onClick={handleClick}
					style={{ cursor: 'pointer' }}>
					<span>{user.firstName}</span>
					<img
						src={user.profilePic}
						alt='Profile'
					/>
				</div>
			)}
		</div>
	);
};

export default Header;
