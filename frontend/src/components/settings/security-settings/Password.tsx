import React from 'react';
import '../Settings.css';

import SettingsButton from '../../buttons/SettingsButton';

import { HistoryIcon } from '../../Icons';

const Password: React.FC = () => {
	return (
		<SettingsButton
			icon={
				<HistoryIcon
					className='ButtonIcons'
					height='40px'
					width='40px'
				/>
			}
			className='settings-button'
			title='Password'
		/>
	);
};
export default Password;
