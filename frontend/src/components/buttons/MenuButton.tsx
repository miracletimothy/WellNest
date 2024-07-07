import React from 'react';

interface MenuButtonProps {
	title: string;
	icon: React.ReactNode;
	styles?: React.CSSProperties;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}
const MenuButton: React.FC<MenuButtonProps> = ({
	title,
	icon,
	styles,
	onClick,
}) => {
	return (
		<div
			className='menu-button'
			style={styles}
			onClick={onClick}>
			<span>{icon}</span>
			<span>{title}</span>
		</div>
	);
};

export default MenuButton;
