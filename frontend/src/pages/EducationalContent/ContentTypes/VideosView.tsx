import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import './VideosView.css'; // Import CSS for styling
import SkeletonVideoItem from './Skeletons/SkeletonVideoItem';

interface Video {
	_id: string;
	title: string;
	file: string;
}

const VideosView: React.FC<{ category: string }> = ({ category }) => {
	const [videos, setVideos] = useState<Video[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchVideos = async () => {
			const token = localStorage.getItem('token');
			try {
				const response = await axiosInstance.get<Video[]>(
					`http://127.0.0.1:5000/api/ec/?category=${category}&type=video`,
					{
						headers: {
							'Content-Type': 'application/json',
							'x-auth-token': token,
						},
					},
				);
				setVideos(response.data);
				setLoading(false); // Mark loading as false when data is fetched
			} catch (error) {
				console.error('Error fetching videos:', error);
			}
		};

		fetchVideos();
	}, [category]);

	const generateVideoUrl = (filePath: string): string => {
		return `http://127.0.0.1:5000/${filePath}`;
	};

	return (
		<div className='video-grid'>
			{loading ? (
				// Show skeletons while loading
				Array.from({ length: 10 }).map((_, index) => (
					<SkeletonVideoItem key={index} />
				))
			) : videos.length === 0 ? (
				<div>No videos found.</div>
			) : (
				videos.map(video => (
					<div
						key={video._id}
						className='video-item'>
						<video
							controls={false}
							onClick={() =>
								window.open(generateVideoUrl(video.file), '_blank')
							}>
							<source
								src={generateVideoUrl(video.file)}
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</video>
						<div className='video-title'>{video.title}</div>
					</div>
				))
			)}
		</div>
	);
};

export default VideosView;
