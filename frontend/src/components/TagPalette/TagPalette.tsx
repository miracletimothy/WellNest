import React, { useState } from 'react';
import './TagPalette.css'; // Import some basic styling for the tags

const tagsList = [
	'Prenatal',
	'Postnatal',
	'Nutrition',
	'Exercise',
	'Fitness',
	'Mental Health',
	'Family Planning',
	'Labor',
	'Delivery',
	'Breastfeeding',
	'Newborn Care',
	'Vaccination',
	'Immunization',
	'Symptoms',
	'Remedies',
	'Announcements',
	'Updates',
	'Lifestyle',
	'Appointments',
	'Tracking',
	'Support',
	'Medications',
	'Supplements',
];

const TagPalette: React.FC<{
	selectedTags: string[];
	onChange: (tags: string[]) => void;
}> = ({ selectedTags, onChange }) => {
	const handleTagClick = (tag: string) => {
		let updatedTags = [];
		if (selectedTags.includes(tag)) {
			updatedTags = selectedTags.filter(t => t !== tag);
		} else {
			updatedTags = [...selectedTags, tag];
		}
		onChange(updatedTags);
	};

	return (
		<div className='tag-palette'>
			{tagsList.map(tag => (
				<div
					key={tag}
					className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
					onClick={() => handleTagClick(tag)}>
					{tag}
				</div>
			))}
		</div>
	);
};

export default TagPalette;
