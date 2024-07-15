import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import LoadingAnimation from '../../components/Loaders/LoadingAnimation';
import axiosInstance from '../../utils/axiosInstance';
import Header from '../../components/Header/Header';
import '../../styles/Theme.css';

import VideosView from './ContentTypes/VideosView';
import ImagesView from './ContentTypes/ImagesView';
import AudiosView from './ContentTypes/AudiosView';
import FilesView from './ContentTypes/FilesView';
import LinksView from './ContentTypes/LinksView';

const RenderContentView: React.FC<{ navigation: string; category: string }> = ({
	navigation,
	category,
}) => {
	switch (navigation) {
		case 'videos':
			return <VideosView category={category} />;
		case 'images':
			return <ImagesView category={category} />;
		case 'audios':
			return <AudiosView category={category} />;
		case 'files':
			return <FilesView category={category} />;
		case 'links':
			return <LinksView category={category} />;
		default:
			return <div>Select a content type to view.</div>;
	}
};

const CategoryDetails: React.FC = () => {
	const [navigation, setNavigation] = useState('videos');
	const [categoryDetails, setCategoryDetails] = useState<{
		name: string;
		description: string;
	} | null>(null);
	const { category } = useParams<{ category: string }>();
	const history = useHistory();

	const handleCreateClick = () => {
		history.push(`/content/${category}/create`);
	};

	useEffect(() => {
		const fetchCategoryDetails = async () => {
			const token = localStorage.getItem('token');
			try {
				const response = await axiosInstance.get(
					`http://127.0.0.1:5000/api/hw/content-categories`,
					{
						headers: {
							'Content-Type': 'application/json',
							'x-auth-token': token,
						},
					},
				);
				const data = response.data;
				console.log(data);

				const categoryDetail = data.find(
					(item: any) =>
						item.name.toLowerCase().replace(/ /g, '-') ===
						category.toLowerCase(),
				);
				if (categoryDetail) {
					setCategoryDetails({
						name: categoryDetail.name,
						description: categoryDetail.description,
					});
				} else {
					console.log(`Category '${category}' not found in data.`);
				}
			} catch (error) {
				console.error('Error fetching category details:', error);
			}
		};

		fetchCategoryDetails();
	}, [category]);

	if (!categoryDetails) {
		return (
			<div
				style={{
					width: '100vw',
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<LoadingAnimation />
			</div>
		);
	}

	return (
		<div
			id='page-container'
			className='page-container'>
			<Header
				pageTitle='Category details'
				className='header'
			/>
			<div
				id='page-content'
				className='page-content'>
				<div className='page-heading-group'>
					<h2
						id='page-heading'
						className='page-heading'>
						{categoryDetails.name} content
					</h2>
					<button
						id='create-button'
						className='button'
						onClick={handleCreateClick}>
						Create
					</button>
				</div>

				<section>
					<div>Info: {categoryDetails.description}</div>
					<nav className='horizontal-navigation'>
						<ul>
							<li>
								<button
									id='create-button'
									className='button'
									onClick={() => setNavigation('videos')}>
									Videos
								</button>
							</li>
							<li>
								<button
									id='create-button'
									className='button'
									onClick={() => setNavigation('images')}>
									Images
								</button>
							</li>
							<li>
								<button
									id='create-button'
									className='button'
									onClick={() => setNavigation('audios')}>
									Audios
								</button>
							</li>
							<li>
								<button
									id='create-button'
									className='button'
									onClick={() => setNavigation('files')}>
									Files
								</button>
							</li>
							<li>
								<button
									id='create-button'
									className='button'
									onClick={() => setNavigation('links')}>
									Links
								</button>
							</li>
						</ul>
					</nav>
					<div>
						<RenderContentView
							navigation={navigation}
							category={category}
						/>
					</div>
				</section>
			</div>
		</div>
	);
};

export default CategoryDetails;
