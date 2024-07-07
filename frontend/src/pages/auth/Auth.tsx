import React from 'react';
import { useState } from 'react';
import '../../App.css';

const Auth: React.FC = () => {
	const [authType, setAuthType] = useState('signin');

	const handleAuthTypeChange = () => {
		setAuthType('signup');
	};

	return (
		<div className='Auth'>
			<h2>Auth</h2>
			<div className='auth-forms'>
				<div className='button-group'>
					<button onClick={handleAuthTypeChange}>SignIn</button>
					<button onClick={handleAuthTypeChange}>SignUp</button>
				</div>
				<div className='signin-form'>
					<form action='#'>
						<input
							type='text'
							name='email'
							id='email'
							placeholder='Email'
							required
						/>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='Password'
							required
							className='password-field'
						/>
						<button
							type='submit'
							className='submit-button'>
							Submit
						</button>
					</form>
				</div>
				<div className='signup-form'>
					<form action='#'>
						<div className='name-inputs'>
							<input
								type='text'
								name='firstname'
								id='firstname'
								placeholder='First Name'
								required
							/>
							<input
								type='text'
								name='lastname'
								id='lastname'
								placeholder='Last Name'
								required
							/>
						</div>
						<input
							type='text'
							name='email'
							id='email'
							placeholder='Email'
							required
						/>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='Password'
							required
						/>
						<button type='submit'>Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Auth;
