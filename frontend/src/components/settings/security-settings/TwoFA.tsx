import React from 'react';
import '../Settings.css';

import SettingsButton from '../../buttons/SettingsButton';

import { SecurityIcon } from '../../Icons';

const TwoFA: React.FC = () => {
	return (
		<SettingsButton
			icon={
				<SecurityIcon
					className='ButtonIcons'
					height='40px'
					width='40px'
				/>
			}
			className='settings-button'
			title='2FA'
		/>
	);
};
export default TwoFA;
