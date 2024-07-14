import React, { useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import '../../styles/Theme.css';

const VerifyEmail: React.FC = () => {
	const [error, setError] = useState('');
	const { email } = useParams<{ email: string }>();
	const [code, setCode] = useState('');
	const history = useHistory();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const res = await axiosInstance.post('/auth/verify', {
				email,
				code,
			});

			if (res.data.msg === 'Email verified and user registered successfully') {
				const role = localStorage.getItem('role');
				if (role === 'pregnant_woman') {
					history.push('/mobile-app-branding');
				} else {
					history.push('/auth');
				}
			} else {
				throw new Error('Verification failed. Please try again.');
			}
		} catch (err) {
			console.error(err);

			setError('Verification failed. Please try again.');
		}
	};

	return (
		<div
			id='medium-form'
			className='medium-form'>
			<h1
				id='heading1'
				className='heading1'>
				Verify Email
			</h1>
			<form
				id='form'
				className='form'
				onSubmit={handleSubmit}>
				<div
					id='input-group'
					className='input-group'>
					<label
						id='label'
						className='label'>
						Verification Code:
					</label>
					<input
						id='input'
						className='input'
						type='text'
						value={code}
						onChange={e => setCode(e.target.value)}
						required
					/>
				</div>
				<div
					id='button-group'
					className='button-group'>
					<button
						id='button'
						className='button'>
						Continue
					</button>
				</div>
			</form>
			<span
				id='message-box'
				className='message-box'>
				{error && <p style={{ color: 'red' }}>{error}</p>}
			</span>
			<span
				id='link-group'
				className='link-group'>
				<Link
					id='link'
					className='link'
					to='/help#create-account'>
					Did not receive verification code?
				</Link>
			</span>
		</div>
	);
};

export default VerifyEmail;
