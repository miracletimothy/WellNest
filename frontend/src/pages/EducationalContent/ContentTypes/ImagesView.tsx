import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import './ImagesView.css'; // Import CSS for styling
import SkeletonImageItem from './Skeletons/SkeletonImageItem';

interface Image {
	_id: string;
	title: string;
	file: string;
}

const ImagesView: React.FC<{ category: string }> = ({ category }) => {
	const [images, setImages] = useState<Image[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchImages = async () => {
			const token = localStorage.getItem('token');
			try {
				const response = await axiosInstance.get<Image[]>(
					`/ec/?category=${category}&type=image`,
					{
						headers: {
							'Content-Type': 'application/json',
							'x-auth-token': token,
						},
					},
				);
				setImages(response.data);
				setLoading(false); // Mark loading as false when data is fetched
			} catch (error) {
				console.error('Error fetching images:', error);
			}
		};

		fetchImages();
	}, [category]);

	const generateImageUrl = (filePath: string): string => {
		return `http://127.0.0.1:5000/${filePath}`;
	};

	return (
		<div className='image-grid'>
			{loading ? (
				// Show skeletons while loading
				Array.from({ length: images.length || 10 }).map((_, index) => (
					<SkeletonImageItem key={index} />
				))
			) : images.length === 0 ? (
				<div>No images found.</div>
			) : (
				images.map(image => (
					<div
						key={image._id}
						className='image-item'>
						<img
							onClick={() =>
								window.open(generateImageUrl(image.file), '_blank')
							}
							src={generateImageUrl(image.file)}
							alt={image.title}
							className='image-thumbnail'
						/>
						<div className='image-title'>{image.title}</div>
					</div>
				))
			)}
		</div>
	);
};

export default ImagesView;
