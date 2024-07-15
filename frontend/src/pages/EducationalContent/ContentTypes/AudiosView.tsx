import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../utils/axiosInstance';

interface Audio {
	id: string;
	title: string;
	// Add other relevant properties based on your API response
}

const AudiosView: React.FC<{ category: string }> = ({ category }) => {
	const [audios, setAudios] = useState<Audio[]>([]);

	useEffect(() => {
		const fetchAudios = async () => {
			const token = localStorage.getItem('token');
			try {
				const response = await axiosInstance.get<Audio[]>(
					`/hw/content?category=${category}&type=audio`,
					{
						headers: {
							'Content-Type': 'application/json',
							'x-auth-token': token,
						},
					},
				);
				setAudios(response.data);
			} catch (error) {
				console.error('Error fetching audios:', error);
			}
		};

		fetchAudios();
	}, [category]);

	return (
		<div>
			{audios.length === 0 ? (
				<div>No audios found.</div>
			) : (
				<ul>
					{audios.map(audio => (
						<li key={audio.id}>{audio.title}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default AudiosView;
