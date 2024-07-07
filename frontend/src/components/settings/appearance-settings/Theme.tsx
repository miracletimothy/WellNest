import React from 'react';
import '../Settings.css';

import SettingsButton from '../../buttons/SettingsButton';

import { ThemeIcon } from '../../Icons';

const Theme: React.FC = () => {
	return (
		<SettingsButton
			icon={
				<ThemeIcon
					className='ButtonIcons'
					height='40px'
					width='40px'
				/>
			}
			className='settings-button'
			title='Theme'
		/>
	);
};
export default Theme;
