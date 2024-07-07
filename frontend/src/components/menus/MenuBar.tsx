import React from 'react';

interface MenuBarProps {
	children: React.ReactNode;
	styles?: React.CSSProperties;
}

const MenuBar: React.FC<MenuBarProps> = ({ children, styles }) => {
	return (
		<div
			className='menu-bar'
			style={styles}>
			{children}
		</div>
	);
};

export default MenuBar;
