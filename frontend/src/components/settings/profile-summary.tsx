import React, { useState, useEffect, useRef } from 'react';
import './Settings.css';
import Modal from '../modals/Modal';

interface ProfileSummaryProps {
	profilePic?: string;
	userName: string;
	userRole: string;
	verificationStatus: string;
}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({
	profilePic,
	userName,
	userRole,
	verificationStatus,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const inputFileRef = useRef<HTMLInputElement>(null);
	const imageViewRef = useRef<HTMLLabelElement>(null);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	useEffect(() => {
		const inputFile = inputFileRef.current;
		const imageView = imageViewRef.current;

		if (!inputFile || !imageView) {
			console.log('Input file or image view not found');
			return;
		}

		const uploadImage = () => {
			console.log('Upload Image function called');
			if (inputFile.files && inputFile.files[0]) {
				const imgLink = URL.createObjectURL(inputFile.files[0]);
				imageView.style.backgroundImage = `url(${imgLink})`;
				console.log('Image uploaded and background set to:', imgLink);
			} else {
				console.log('No file selected');
			}
		};

		inputFile.addEventListener('change', uploadImage);
		console.log('Event listener added to input file');

		return () => {
			inputFile.removeEventListener('change', uploadImage);
			console.log('Event listener removed from input file');
		};
	}, []);

	return (
		<div className='profile-summary'>
			<div className='profilePic-userDetails'>
				<span id='profilePic-container'>
					{profilePic ? (
						<img
							src={profilePic}
							alt='User Profile Pic'
							id='profilePic'
						/>
					) : (
						<div id='profilePic-placeholder'>No Image</div>
					)}
				</span>
				<span id='userName-userRole-activityStatus-container'>
					<h3
						id='userName'
						spellCheck={false}>
						{userName}
					</h3>
					<p id='userRole'>{userRole}</p>
					<h4 id='activityStatus'>{verificationStatus}</h4>
				</span>
			</div>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}>
				<div className='edit-profile-modal'>
					<h2>Edit Profile</h2>
					<form>
						<div className='edit-profilePic-container'>
							<div>
								<label
									id='edit-profilePic'
									ref={imageViewRef}>
									<input
										type='file'
										accept='image/*'
										id='input-file'
										hidden
										ref={inputFileRef}
									/>
								</label>
							</div>
						</div>
						<input
							type='text'
							placeholder='Name'
						/>
						<input
							type='email'
							placeholder='Email'
						/>
						<div className='edit-profile-buttons'>
							<button type='submit'>Save</button>
							<button
								type='button'
								onClick={closeModal}>
								Cancel
							</button>
						</div>
					</form>
				</div>
			</Modal>
			<div id='edit-profile-container'>
				<button
					id='edit-profile'
					onClick={openModal}>
					Edit Profile
				</button>
			</div>
		</div>
	);
};

export default ProfileSummary;
