import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	return (
		<div className='App'>
			<Header />
			<Sidebar />
			<div className='MainContent'>{children}</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
