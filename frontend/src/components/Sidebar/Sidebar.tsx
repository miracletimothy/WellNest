import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

import {
	DashboardIcon,
	AppointmentsIcon,
	ChatIcon,
	ContentIcon,
	RecordsIcon,
	SettingsIcon,
	LogoutIcon,
} from '../Icons/Icons';

interface SidebarProps {
	logout: () => void;
	className: string;
}

const Sidebar: React.FC<SidebarProps> = ({ logout, className }) => {
	return (
		<div className={`sidebar ${className}`}>
			<ul>
				<li>
					<Link
						to='/'
						id='link'>
						<DashboardIcon
							className='ButtonIcons'
							height='32px'
							width='32px'
						/>
					</Link>
				</li>
				<li>
					<Link
						to='/appointments'
						id='link'>
						<AppointmentsIcon
							className='ButtonIcons'
							height='32px'
							width='32px'
						/>
					</Link>
				</li>
				<li>
					<Link
						to='/chat'
						id='link'>
						<ChatIcon
							className='ButtonIcons'
							height='32px'
							width='32px'
						/>
					</Link>
				</li>

				<li>
					<Link
						to='/content'
						id='link'>
						<ContentIcon
							className='ButtonIcons'
							height='32px'
							width='32px'
						/>
					</Link>
				</li>
				<li>
					<Link
						to='/records'
						id='link'>
						<RecordsIcon
							className='ButtonIcons'
							height='32px'
							width='32px'
						/>
					</Link>
				</li>

				<li>
					<Link
						to='/settings'
						id='link'>
						<SettingsIcon
							className='ButtonIcons'
							height='32px'
							width='32px'
						/>
					</Link>
				</li>
				<li>
					<LogoutIcon
						onClick={logout}
						className='ButtonIcons'
						height='32px'
						width='32px'
						style={{ transform: 'scaleX(-1) ', cursor: 'pointer' }}
					/>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
