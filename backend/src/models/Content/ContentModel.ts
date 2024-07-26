import mongoose, { Document, Schema } from "mongoose";

export interface IContent extends Document {
  title: string;
  description: string;
  tags: string[];
  links: string[];
  file: string | null;
  fileType: string;
  type: string;
}

const ContentSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
  links: { type: [String], required: true },
  file: { type: String, default: null },
  fileType: { type: String, default: "" },
  type: { type: String, required: true },
});

const ContentModel =
  mongoose.models.Content || mongoose.model<IContent>("Content", ContentSchema);
export default ContentModel;
