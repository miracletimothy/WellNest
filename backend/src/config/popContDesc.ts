import mongoose from 'mongoose';
import ContentCategory from '../models/ContentCategory';
import connectDB from '../utils/db';

const categories = [
	{
		name: 'Prenatal Care',
		description:
			'Comprehensive information and guidelines on prenatal care to ensure a healthy pregnancy journey.',
	},
	{
		name: 'Postnatal Care',
		description:
			'Essential advice and practices for the health and well-being of both mother and baby after birth.',
	},
	{
		name: 'Nutrition',
		description:
			"Dietary recommendations and nutritional advice for expecting and new mothers to support their health and the baby's development.",
	},
	{
		name: 'Exercise and Fitness',
		description:
			'Safe and effective exercise routines and fitness tips tailored for pregnant and postpartum women.',
	},
	{
		name: 'Mental Health',
		description:
			'Resources and support for managing mental health during and after pregnancy, including dealing with anxiety, depression, and stress.',
	},
	{
		name: 'Family Planning',
		description:
			'Information on family planning methods and contraception options to help manage reproductive health.',
	},
	{
		name: 'Labor and Delivery',
		description:
			'Guidance and tips on preparing for labor and delivery, including pain management and birthing options.',
	},
	{
		name: 'Breastfeeding',
		description:
			'Advice and support for breastfeeding, including techniques, benefits, and overcoming common challenges.',
	},
	{
		name: 'Newborn Care',
		description:
			'Practical tips and information on caring for a newborn, including feeding, sleeping, and hygiene.',
	},
	{
		name: 'Vaccinations and Immunizations',
		description:
			'Information on important vaccinations and immunizations for both mother and baby.',
	},
	{
		name: 'Common Pregnancy Symptoms and Remedies',
		description:
			'Insights into common pregnancy symptoms and safe remedies to alleviate discomfort.',
	},
	{
		name: 'Emergency and Complications',
		description:
			'Guidance on handling emergencies and complications during pregnancy and postpartum.',
	},
	{
		name: 'Announcements and Updates',
		description:
			'Latest updates and announcements related to maternal health and well-being.',
	},
	{
		name: 'Healthy Lifestyle Tips',
		description:
			'Tips and advice for maintaining a healthy lifestyle during and after pregnancy.',
	},
	{
		name: 'Medical Appointments and Tracking',
		description:
			'Tools and advice for scheduling and tracking medical appointments and check-ups.',
	},
	{
		name: 'Support Groups and Resources',
		description:
			'Information on finding and joining support groups and accessing valuable resources for expecting and new mothers.',
	},
	{
		name: 'Medications and Supplements',
		description:
			'Safe medication and supplement use during pregnancy and breastfeeding.',
	},
];

const populateCategories = async () => {
	await connectDB();
	try {
		await ContentCategory.insertMany(categories);
		console.log('Data inserted successfully');
	} catch (error) {
		console.error('Error inserting data:', error);
	} finally {
		mongoose.disconnect();
	}
};

populateCategories();
