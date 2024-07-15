import React from 'react';
import './Icons.css';

interface ButtonIconsProps {
	height: string;
	width: string;
	className: string;
	onClick?: () => void;
	style?: React.CSSProperties;
}

const AnalyticsIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<div>
			<svg
				height={height}
				width={width}
				className={className}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 -960 960 960'
				fill='#e8eaed'>
				<path d='M280-280h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z' />
			</svg>
		</div>
	);
};
const VerifiedUserIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<div>
			<svg
				height={height}
				width={width}
				className={className}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 -960 960 960'
				fill='#e8eaed'
				style={{ height: '60px', width: '60px' }}>
				<path d='m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z' />
			</svg>
		</div>
	);
};

const ExportIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h120v80H240v440h480v-440H600v-80h120q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240Zm200-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z' />
		</svg>
	);
};
const UploadIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z' />
		</svg>
	);
};
const TrackingIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='M80-600v-120q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v120h-80v-120H160v120H80Zm80 440q-33 0-56.5-23.5T80-240v-120h80v120h640v-120h80v120q0 33-23.5 56.5T800-160H160Zm240-120q11 0 21-5.5t15-16.5l124-248 44 88q5 11 15 16.5t21 5.5h240v-80H665l-69-138q-5-11-15-15.5t-21-4.5q-11 0-21 4.5T524-658L400-410l-44-88q-5-11-15-16.5t-21-5.5H80v80h215l69 138q5 11 15 16.5t21 5.5Zm80-200Z' />
		</svg>
	);
};
const NotesIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='M680-320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-440q0-17-11.5-28.5T680-480q-17 0-28.5 11.5T640-440q0 17 11.5 28.5T680-400ZM440-40v-116q0-21 10-39.5t28-29.5q32-19 67.5-31.5T618-275l62 75 62-75q37 6 72 18.5t67 31.5q18 11 28.5 29.5T920-156v116H440Zm79-80h123l-54-66q-18 5-35 13t-34 17v36Zm199 0h122v-36q-16-10-33-17.5T772-186l-54 66Zm-76 0Zm76 0Zm-518 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v200q-16-20-35-38t-45-24v-138H200v560h166q-3 11-4.5 22t-1.5 22v36H200Zm80-480h280q26-20 57-30t63-10v-40H280v80Zm0 160h200q0-21 4.5-41t12.5-39H280v80Zm0 160h138q11-9 23.5-16t25.5-13v-51H280v80Zm-80 80v-560 137-17 440Zm480-240Z' />
		</svg>
	);
};
const MedicationIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='M420-260h120v-100h100v-120H540v-100H420v100H320v120h100v100ZM280-120q-33 0-56.5-23.5T200-200v-440q0-33 23.5-56.5T280-720h400q33 0 56.5 23.5T760-640v440q0 33-23.5 56.5T680-120H280Zm0-80h400v-440H280v440Zm-40-560v-80h480v80H240Zm40 120v440-440Z' />
		</svg>
	);
};
const LabResultsIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='M320-280v-80h87q-5 20-6.5 40t.5 40h-81Zm0 200q-83 0-141.5-58.5T120-280v-360q-33 0-56.5-23.5T40-720v-80q0-33 23.5-56.5T120-880h400q33 0 56.5 23.5T600-800v80q0 33-23.5 56.5T520-640v121q-24 15-44 35t-35 44H320v-80h120v-120H200v360q0 50 35 85t85 35q30 0 54.5-13t41.5-36q8 20 18 38t24 35q-27 26-62 41t-76 15ZM120-720h400v-80H120v80Zm540 520q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM864-40 756-148q-22 14-46 21t-50 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50t-21 46L920-96l-56 56ZM120-720v-80 80Z' />
		</svg>
	);
};
const HistoryIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z' />
		</svg>
	);
};
const OverviewIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='m787-145 28-28-75-75v-112h-40v128l87 87Zm-587 25q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v268q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H200Zm0-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z' />
		</svg>
	);
};

const SecurityIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z' />
		</svg>
	);
};

const DashboardIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z' />
		</svg>
	);
};

const AppointmentsIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z' />
		</svg>
	);
};

const ChatIcon: React.FC<ButtonIconsProps> = ({ height, width, className }) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z' />
		</svg>
	);
};

const ContentIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='m590-488 160-92-160-92-160 92 160 92Zm0 122 110-64v-84l-110 64-110-64v84l110 64ZM480-480Zm320 320H600q0-20-1.5-40t-4.5-40h206v-480H160v46q-20-3-40-4.5T80-680v-40q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Zm-720 0v-120q50 0 85 35t35 85H80Zm200 0q0-83-58.5-141.5T80-360v-80q117 0 198.5 81.5T360-160h-80Zm160 0q0-75-28.5-140.5t-77-114q-48.5-48.5-114-77T80-520v-80q91 0 171 34.5T391-471q60 60 94.5 140T520-160h-80Z' />
		</svg>
	);
};

const RecordsIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z' />
		</svg>
	);
};

const SettingsIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z' />
		</svg>
	);
};

const LogoutIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
	style,
	onClick,
}) => {
	return (
		<svg
			onClick={onClick}
			style={style}
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z' />
		</svg>
	);
};

const ThemeIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
}) => {
	return (
		<svg
			height={height}
			width={width}
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z' />
		</svg>
	);
};

const CloseIcon: React.FC<ButtonIconsProps> = ({
	height,
	width,
	className,
	onClick,
	style,
}) => {
	return (
		<svg
			style={style}
			height={height}
			width={width}
			className={className}
			onClick={onClick}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 -960 960 960'
			fill='#e8eaed'>
			<path d='m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
		</svg>
	);
};

export {
	AnalyticsIcon,
	VerifiedUserIcon,
	ExportIcon,
	UploadIcon,
	TrackingIcon,
	NotesIcon,
	MedicationIcon,
	LabResultsIcon,
	HistoryIcon,
	OverviewIcon,
	SecurityIcon,
	DashboardIcon,
	AppointmentsIcon,
	ChatIcon,
	ContentIcon,
	RecordsIcon,
	SettingsIcon,
	LogoutIcon,
	ThemeIcon,
	CloseIcon,
};
