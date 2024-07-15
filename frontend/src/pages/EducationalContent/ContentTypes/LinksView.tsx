import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../utils/axiosInstance';

interface Link {
	id: string;
	title: string;
	// Add other relevant properties based on your API response
}

const LinksView: React.FC<{ category: string }> = ({ category }) => {
	const [links, setLinks] = useState<Link[]>([]);

	useEffect(() => {
		const fetchLinks = async () => {
			const token = localStorage.getItem('token');
			try {
				const response = await axiosInstance.get<Link[]>(
					`/hw/content?category=${category}&type=link`,
					{
						headers: {
							'Content-Type': 'application/json',
							'x-auth-token': token,
						},
					},
				);
				setLinks(response.data);
			} catch (error) {
				console.error('Error fetching links:', error);
			}
		};

		fetchLinks();
	}, [category]);

	return (
		<div>
			{links.length === 0 ? (
				<div>No links found.</div>
			) : (
				<ul>
					{links.map(link => (
						<li key={link.id}>{link.title}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default LinksView;
