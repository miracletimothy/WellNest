import mongoose, { Document, Schema } from "mongoose";

export interface IContent extends Document {
  type: string;
  title: string;
  description: string;
  tags: string[];
  links: string[];
  file?: string;
  createdAt: Date;
}

const contentSchema: Schema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    links: {
      type: [String],
      required: false,
    },
    file: {
      type: String,
      required: false,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Content = mongoose.model<IContent>("Content", contentSchema);

export default Content;
