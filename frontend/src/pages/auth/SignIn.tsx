import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useHistory, Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

// Theme
import '../../styles/Theme.css';

const SignIn: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login } = useAuth();
	const [error, setError] = useState('');
	const history = useHistory();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const res = await axiosInstance.post('/auth/login', { email, password });
			if (res.data.user.role !== 'health_worker') {
				throw new Error('Unauthorized access');
			}
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('role', res.data.user.role);
			console.log('Login successful:', res.data.user);
			console.log('Token exists, redirecting to main page...');
			login(res.data.token, res.data.user);
			history.replace('/');
		} catch (err) {
			setError('Login failed. Please check your credentials and try again.');
			console.error(err);
		}
	};

	return (
		<div
			id='medium-form'
			className='medium-form'>
			<h1
				id='heading1'
				className='heading1'>
				Sign in
			</h1>
			<span>
				<span>New user? </span>
				<Link
					id='link'
					to='/create-account'>
					Create an account
				</Link>
			</span>

			<form
				id='form'
				className='form'
				onSubmit={handleSubmit}>
				<div
					id='input-group'
					className='input-group'>
					<label
						id='label'
						htmlFor='email'>
						Email address
					</label>
					<input
						id='input'
						type='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</div>
				<div
					id='input-group'
					className='input-group'>
					<label
						id='label'
						htmlFor='password'>
						Password
					</label>
					<input
						id='input'
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
				</div>
				<div
					id='button-group'
					className='button-group'>
					<button id='button'>Continue</button>
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
					to='/help#signin'>
					Get help signing in
				</Link>
			</span>
		</div>
	);
};

export default SignIn;
