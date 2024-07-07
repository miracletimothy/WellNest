import React from 'react';
import '../../App.css';

const Upload: React.FC = () => {
	return (
		<div className='upload-container'>
			<form action='#'>
				<label
					htmlFor='upload-file'
					id='drop-area'>
					<input
						type='file'
						name='upload-file'
						id='upload-file'
						accept='image/png'
						hidden
					/>
					<h2>Drag and drop here</h2>
				</label>
				<div className='upload-details'>
					<h2>Upload Details</h2>

					<input
						type='text'
						placeholder='Document Name'
						name='document-name'
						id='document-name'
					/>

					<textarea
						name='document-description'
						id='document-description'
						placeholder='Document Description'></textarea>

					<div>
						<button>Upload</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Upload;
