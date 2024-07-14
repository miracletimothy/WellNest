import mongoose, { Schema, Document } from 'mongoose';

interface ContentCategoryInterface extends Document {
	name: string;
	description: string;
}

const ContentCategorySchema: Schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

const ContentCategory = mongoose.model<ContentCategoryInterface>(
	'ContentCategory',
	ContentCategorySchema,
);
export default ContentCategory;
