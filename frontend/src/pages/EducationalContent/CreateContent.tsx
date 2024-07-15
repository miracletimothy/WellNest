import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axiosInstance from '../../utils/axiosInstance';
import TagPalette from '../../components/TagPalette/TagPalette';
import Header from '../../components/Header/Header';

import '../../styles/Theme.css';

interface DecodedToken {
	user: {
		id: string;
	};
}

const CreateContent: React.FC = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [file, setFile] = useState<File | null>(null);
	const [fileError, setFileError] = useState<string>('');
	const [links, setLinks] = useState<string[]>([]);
	const [currentLink, setCurrentLink] = useState<string>('');

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const selectedFile = e.target.files[0];
			const allowedTypes = [
				'video/mp4',
				'audio/mp3',
				'audio/mpeg',
				'image/jpeg',
				'application/pdf',
			];

			if (!allowedTypes.includes(selectedFile.type)) {
				setFileError('Only mp4, mp3, jpg, and pdf files are allowed.');
				setFile(null);
				return;
			}

			setFileError('');
			setFile(selectedFile);
		}
	};

	const handleFormSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const token = localStorage.getItem('token');

		if (!token) {
			console.error('No token found');
			return;
		}

		const decodedToken: DecodedToken = jwtDecode<DecodedToken>(token);
		const userId = decodedToken.user.id;

		const formData = new FormData();
		formData.append('title', title);
		formData.append('description', description);
		formData.append('tags', JSON.stringify(selectedTags));
		formData.append('links', JSON.stringify(links));
		if (file) {
			formData.append('file', file);

			// Determine the content type based on the file type
			const fileType = file.type.split('/')[0];
			formData.append('type', fileType); // video, audio, image, etc.
		} else if (links.length > 0) {
			formData.append('type', 'link');
		} else {
			console.error('No file or link provided');
			return;
		}
		formData.append('userId', userId);

		// Debugging: Log FormData entries
		for (let [key, value] of formData.entries()) {
			console.log(key, value);
		}

		try {
			const response = await axiosInstance.post(
				'/ec/create',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						'x-auth-token': token,
					},
				},
			);
			console.log('Content created:', response.data);
			// Handle successful content creation (e.g., redirect, show a message, etc.)
			setTitle('');
			setDescription('');
			setSelectedTags([]);
			setLinks([]);
			setFile(null);
		} catch (error) {
			console.error('Error creating content:', error);
			// Handle error (e.g., show an error message)
		}
	};

	const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentLink(e.target.value);
	};

	const handleLinkKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === ' ' && currentLink.trim()) {
			setLinks([...links, currentLink.trim()]);
			setCurrentLink('');
		}
	};

	const removeLink = (index: number) => {
		setLinks(links.filter((_, i) => i !== index));
	};

	return (
		<div
			id='page-container'
			className='page-container'>
			<Header
				pageTitle='Create content'
				className='header'
			/>

			<div
				id='page-content'
				className='page-content'>
				<div className='page-heading-group'>
					<h2
						id='page-heading'
						className='page-heading'>
						Create content
					</h2>
				</div>

				<section id='large-form'>
					<form
						onSubmit={handleFormSubmit}
						id='form'
						className='form'>
						<div
							id='input-group'
							className='input-group'>
							<label
								id='label'
								className='label'>
								Title:
							</label>
							<input
								onChange={e => setTitle(e.target.value)}
								id='input'
								className='input'
								type='text'
								name='title'
								value={title}
								required
							/>
						</div>
						<div
							id='input-group'
							className='input-group'>
							<label
								id='label'
								className='label'>
								Description:
							</label>
							<textarea
								onChange={e => setDescription(e.target.value)}
								id='textarea'
								value={description}
								className='textarea'
								name='description'
								required></textarea>
						</div>
						<div>
							<TagPalette
								selectedTags={selectedTags}
								onChange={setSelectedTags}
							/>
						</div>
						<div
							id='input-group'
							className='input-group'>
							<label
								id='label'
								className='label'>
								Links:
							</label>
							<div className='links-input'>
								{links.map((link, index) => (
									<div
										key={index}
										className='link-capsule'>
										{link}
										<button
											type='button'
											onClick={() => removeLink(index)}>
											&times;
										</button>
									</div>
								))}
								<input
									onChange={handleLinkChange}
									onKeyPress={handleLinkKeyPress}
									id='input'
									className='input'
									type='text'
									name='links'
									value={currentLink}
									placeholder='Add a link and press space'
								/>
							</div>
						</div>
						<div
							id='input-group'
							className='input-group'>
							<label
								id='label'
								className='file-input'>
								Choose file to upload
								<input
									id='input'
									className='input'
									type='file'
									name='file'
									accept='.mp4,.mp3,.jpg,.jpeg,.pdf'
									onChange={handleFileChange}
									hidden
								/>
							</label>
							{fileError && <p style={{ color: 'red' }}>{fileError}</p>}
						</div>
						<div
							id='button-group'
							className='button-group'>
							<button
								id='create-button'
								className='button'
								type='submit'>
								Upload
							</button>
						</div>
					</form>
				</section>
			</div>
		</div>
	);
};

export default CreateContent;
