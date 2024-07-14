import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../utils/axiosInstance';

interface File {
	id: string;
	title: string;
	// Add other relevant properties based on your API response
}

const FilesView: React.FC<{ category: string }> = ({ category }) => {
	const [files, setFiles] = useState<File[]>([]);

	useEffect(() => {
		const fetchFiles = async () => {
			const token = localStorage.getItem('token');
			try {
				const response = await axiosInstance.get<File[]>(
					`http://127.0.0.1:5000/api/hw/content?category=${category}&type=file`,
					{
						headers: {
							'Content-Type': 'application/json',
							'x-auth-token': token,
						},
					},
				);
				setFiles(response.data);
			} catch (error) {
				console.error('Error fetching files:', error);
			}
		};

		fetchFiles();
	}, [category]);

	return (
		<div>
			{files.length === 0 ? (
				<div>No files found.</div>
			) : (
				<ul>
					{files.map(file => (
						<li key={file.id}>{file.title}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default FilesView;
