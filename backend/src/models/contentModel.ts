import { Schema, model } from 'mongoose';

const contentSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	tags: { type: [String], required: true },
	fileUrl: { type: String, required: true },
	stage: { type: String, required: true },
});

const Content = model('Content', contentSchema);
export default Content;
