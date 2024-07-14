import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const CreateAccount: React.FC = () => {
	const [error, setError] = useState('');
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState<'pregnant_woman' | 'health_worker'>(
		'health_worker',
	);
	const history = useHistory();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const res = await axiosInstance.post('/auth/register', {
				email,
				firstName,
				lastName,
				password,
				role,
			});

			if (res.data.msg === 'Verification code sent to your email') {
				history.push(`/verify/${email}`);
			} else {
				throw new Error('Registration failed. Please try again.');
			}
		} catch (err) {
			console.error(err);
			setError('Create account failed. Please try again.');
		}
	};

	return (
		<div
			id='medium-form'
			className='medium-form'>
			<h1
				id='heading1'
				className='heading1'>
				Create account
			</h1>
			<span>
				<span>Have an account? </span>
				<Link
					id='link'
					className='link'
					to='/signin'>
					Sign in
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
						className='label'
						htmlFor='email'>
						Email address
					</label>
					<input
						id='input'
						className='input'
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
						className='label'
						htmlFor='firstname'>
						First name
					</label>
					<input
						id='input'
						className='input'
						type='text'
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
						required
					/>
				</div>
				<div
					id='input-group'
					className='input-group'>
					<label
						id='label'
						className='label'
						htmlFor='lastname'>
						Last name
					</label>
					<input
						id='input'
						className='input'
						type='text'
						value={lastName}
						onChange={e => setLastName(e.target.value)}
					/>
				</div>

				<div
					id='input-group'
					className='input-group'>
					<label
						id='label'
						className='label'
						htmlFor='password'>
						Password
					</label>
					<input
						id='input'
						className='input'
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
				</div>
				<div
					id='input-group'
					className='input-group'>
					<label
						id='label'
						className='label'
						htmlFor='role'>
						Role
					</label>
					<select
						id='input'
						className='input'
						value={role}
						onChange={e =>
							setRole(e.target.value as 'pregnant_woman' | 'health_worker')
						}>
						<option value='health_worker'>Health Worker</option>
						<option value='pregnant_woman'>Pregnant Woman</option>
					</select>
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
					Get help creating account
				</Link>
			</span>
		</div>
	);
};

export default CreateAccount;
