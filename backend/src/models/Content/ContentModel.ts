// src/models/ContentModel.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IContent extends Document {
  title: string;
  description: string;
  tags: string[];
  links: string[];
  file: string | null;
  fileType: string;
  userId: mongoose.Types.ObjectId; // Assuming this is an ObjectId
  type: string; // Assuming type is a string
}

const ContentSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
  links: { type: [String], required: true },
  file: { type: String, default: null },
  fileType: { type: String, default: "" },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Added field
  type: { type: String, required: true }, // Added field
});

const ContentModel =
  mongoose.models.Content || mongoose.model<IContent>("Content", ContentSchema);
export default ContentModel;
