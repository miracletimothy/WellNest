import React from 'react';
import { useState } from 'react';

import { OverviewIcon } from '../components/Icons';
import MenuBar from '../components/menus/MenuBar';
import MenuButton from '../components/buttons/MenuButton';

import ContentOverview from '../components/content/ContentOverview';
import CreateContent from '../components/content/CreateContent';
import ViewContent from '../components/content/ViewContent';

const Content: React.FC = () => {
	const [contentDisplay, setContentDisplay] = useState<string>('overview');

	const RenderContentDisplay = () => {
		switch (contentDisplay) {
			case 'content-overview':
				return <ContentOverview />;
			case 'create-content':
				return <CreateContent />;
			case 'view-content':
				return <ViewContent />;
			default:
				return <ContentOverview />;
		}
	};
	return (
		<div className='records-page-container'>
			<div className='menu-section'>
				<MenuBar>
					<MenuButton
						icon={
							<OverviewIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						title='Overview'
						onClick={() => setContentDisplay('content-overview')}
					/>
					<MenuButton
						icon={
							<OverviewIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						title='Create'
						onClick={() => setContentDisplay('create-content')}
					/>
					<MenuButton
						icon={
							<OverviewIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						title='View'
						onClick={() => setContentDisplay('view-content')}
					/>
				</MenuBar>
			</div>
			<div className='content-display'>{<RenderContentDisplay />}</div>
		</div>
	);
};

export default Content;
