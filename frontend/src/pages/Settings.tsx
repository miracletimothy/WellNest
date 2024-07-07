import React from 'react';
import '../App.css';
import '../components/settings/Settings.css';

// Testing profilePic
import profilePicture from '../assets/img/101515806.jpg';

import ProfileSummary from '../components/settings/profile-summary';

// Settings Items
// Security
import TwoFA from '../components/settings/security-settings/TwoFA';
import Password from '../components/settings/security-settings/Password';

// Appearance
import Theme from '../components/settings/appearance-settings/Theme';

const Settings: React.FC = () => {
	return (
		<div className='settings-page-container'>
			<div className='settings-page-menu-section'>
				<ProfileSummary
					profilePic={profilePicture}
					userName='Miracle Timothy'
					userRole='Administrator'
					verificationStatus='Verified'
				/>
			</div>
			<div className='settings-page-display-section'>
				<div className='row1-appearance-settings'>
					<span id='row-category-heading-container'>
						<h3 id='row-category-heading'>Appearance</h3>
					</span>
					<div className='category-buttons-group'>
						<Theme />
					</div>
				</div>
				<div className='row2-security-settings'>
					<span id='row-category-heading-container'>
						<h3 id='row-category-heading'>Security</h3>
					</span>
					<span id='category-buttons-group'>
						<TwoFA />
						<Password />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Settings;
