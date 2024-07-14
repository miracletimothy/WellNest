import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';

interface MainLayoutProps {
	children: React.ReactNode;
	logout: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, logout }) => {
	return (
		<div className='MainLayout'>
			<Sidebar
				logout={logout}
				className='Sidebar'
			/>
			<div className='MainContent'>{children}</div>
		</div>
	);
};

export default MainLayout;
