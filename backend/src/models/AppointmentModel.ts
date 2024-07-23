import mongoose, { Document, Schema } from "mongoose";

interface Appointment extends Document {
  serviceId: string;
  date: Date;
  approvalStatus: "approved" | "not approved" | "canceled";
  completionStatus: "complete" | "awaiting" | "missed";
  message?: string; // Optional field
}

const AppointmentSchema: Schema = new Schema({
  serviceId: { type: String, required: true },
  date: { type: Date, required: true },
  approvalStatus: {
    type: String,
    enum: ["approved", "not approved", "canceled"],
    default: "not approved",
  },
  completionStatus: {
    type: String,
    enum: ["complete", "awaiting", "missed"],
    default: "awaiting",
  },
  message: { type: String, default: "" }, // Optional field
});

export default mongoose.model<Appointment>("Appointment", AppointmentSchema);
