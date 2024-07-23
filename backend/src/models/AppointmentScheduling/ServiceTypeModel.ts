import mongoose, { Schema, Document } from "mongoose";

interface IServiceType extends Document {
  name: string;
  duration: number; // in minutes
  description: string;
}

const ServiceTypeSchema: Schema = new Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true },
  description: { type: String, required: true },
});

const ServiceType = mongoose.model<IServiceType>(
  "ServiceType",
  ServiceTypeSchema
);

export default ServiceType;
