import React from 'react';
import './App.css';

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<div className='AuthLayout'>
			<div className='LogoArea'>
				<div className='brand-area'>
					<span>
						<span>CMHMCS</span>
					</span>
					<p>Sign in or create account</p>
				</div>
			</div>
			<div className='MainContent'>{children}</div>
		</div>
	);
};

export default AuthLayout;
