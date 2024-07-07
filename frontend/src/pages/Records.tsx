import React from 'react';
import '../App.css';
import { useState } from 'react';

import {
	ExportIcon,
	UploadIcon,
	TrackingIcon,
	NotesIcon,
	MedicationIcon,
	LabResultsIcon,
	HistoryIcon,
	OverviewIcon,
} from '../components/Icons';

import MenuButton from '../components/buttons/MenuButton';
import MenuBar from '../components/menus/MenuBar';

import Overview from './records-menu-pages/Overview';
import History from './records-menu-pages/History';
import Results from './records-menu-pages/Results';
import Medications from './records-menu-pages/Medications';
import Notes from './records-menu-pages/Notes';
import Tracking from './records-menu-pages/Tracking';
import Upload from './records-menu-pages/Upload';
import Export from './records-menu-pages/Export';

const Records: React.FC = () => {
	const [contentDisplay, setContentDisplay] = useState<string>('overview');

	const RenderContentDisplay = () => {
		switch (contentDisplay) {
			case 'overview':
				return <Overview />;
			case 'history':
				return <History />;
			case 'results':
				return <Results />;
			case 'medications':
				return <Medications />;
			case 'notes':
				return <Notes />;
			case 'tracking':
				return <Tracking />;
			case 'upload':
				return <Upload />;
			case 'export':
				return <Export />;
			default:
				return <Overview />;
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
						onClick={() => setContentDisplay('overview')}
					/>
					<MenuButton
						icon={
							<HistoryIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						title='History'
						onClick={() => setContentDisplay('history')}
					/>
					<MenuButton
						icon={
							<LabResultsIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						title='Results'
						onClick={() => setContentDisplay('results')}
					/>
					<MenuButton
						icon={
							<MedicationIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						title='Medications'
						onClick={() => setContentDisplay('medications')}
					/>
					<MenuButton
						icon={
							<NotesIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						title='Notes'
						onClick={() => setContentDisplay('notes')}
					/>
					<MenuButton
						icon={
							<TrackingIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						title='Tracking'
						onClick={() => setContentDisplay('tracking')}
					/>
					<MenuButton
						icon={
							<UploadIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						title='Upload'
						onClick={() => setContentDisplay('upload')}
					/>
					<MenuButton
						icon={
							<ExportIcon
								className='ButtonIcons'
								height='30px'
								width='30px'
							/>
						}
						title='Export'
						onClick={() => setContentDisplay('export')}
					/>
				</MenuBar>
			</div>
			<div className='content-display'>{<RenderContentDisplay />}</div>
		</div>
	);
};

export default Records;
