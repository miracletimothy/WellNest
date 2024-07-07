import React from 'react';
import './Records.css';

const Note: React.FC = () => {
	return (
		<div className='note'>
			<span>
				<h3>Title</h3>
			</span>

			<span>
				<button>Edit</button>
				<button>Delete</button>
			</span>
		</div>
	);
};

const Notes: React.FC = () => {
	return (
		<div className='notes-container'>
			<form action='#'>
				<input
					type='text'
					name='title'
					id='title'
					placeholder='Title'
				/>
				<textarea
					name='notes'
					id='notes'
					placeholder='Notes'></textarea>
				<button type='submit'>Save</button>
			</form>

			<div className='view-notes'>
				<h2>Notes</h2>
				<div className='notes-list'>
					<Note />
				</div>
			</div>
		</div>
	);
};

export default Notes;
