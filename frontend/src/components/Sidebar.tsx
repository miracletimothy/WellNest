import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

/* Importing Icons */
import {
	DashboardIcon,
	AppointmentsIcon,
	ChatIcon,
	ContentIcon,
	RecordsIcon,
	SettingsIcon,
	LogoutIcon,
} from './Icons';

const Sidebar: React.FC = () => {
	return (
		<div className='Sidebar'>
			<div className='Nav-Icons'>
				<ul className='Nav-Links-Icons'>
					<li>
						<div>
							<Link
								to='/'
								id='link'>
								<div>
									<DashboardIcon
										className='ButtonIcons'
										height='30px'
										width='30px'
									/>
								</div>
							</Link>
						</div>
					</li>
					<li>
						<div>
							<Link
								to='/appointments'
								id='link'>
								<div>
									<AppointmentsIcon
										className='ButtonIcons'
										height='30px'
										width='30px'
									/>
								</div>
							</Link>
						</div>
					</li>
					<li>
						<div>
							<Link
								to='/chat'
								id='link'>
								<div>
									<ChatIcon
										className='ButtonIcons'
										height='30px'
										width='30px'
									/>
								</div>
							</Link>
						</div>
					</li>
					<li>
						<div>
							<Link
								to='/content'
								id='link'>
								<div>
									<ContentIcon
										className='ButtonIcons'
										height='30px'
										width='30px'
									/>
								</div>
							</Link>
						</div>
					</li>
					<li>
						<div>
							<Link
								to='/records'
								id='link'>
								<div>
									<RecordsIcon
										className='ButtonIcons'
										height='30px'
										width='30px'
									/>
								</div>
							</Link>
						</div>
					</li>
				</ul>
				<div className='Bottom-Links'>
					<ul className='Nav-Links-Icons'>
						<li>
							<div>
								<Link
									to='/settings'
									id='link'>
									<div>
										<SettingsIcon
											className='ButtonIcons'
											height='30px'
											width='30px'
										/>
									</div>
								</Link>
							</div>
						</li>
						<li>
							<div>
								<Link
									to='/auth'
									id='link'>
									<div>
										<LogoutIcon
											className='ButtonIcons'
											height='30px'
											width='30px'
										/>
									</div>
								</Link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
