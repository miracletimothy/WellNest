import '../settings/Settings.css';

interface SettingsButtonProps {
	icon: React.ReactNode;
	title: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	style?: React.CSSProperties;
	className: string;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({
	icon,
	title,
	onClick,
	style,
	className,
}) => {
	return (
		<div
			style={style}
			onClick={onClick}
			className={className}>
			<span id='icon'>{icon}</span>
			<span id='title'>{title}</span>
		</div>
	);
};

export default SettingsButton;
