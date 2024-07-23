import mongoose, { Schema, Document } from "mongoose";

export interface ISchedule extends Document {
  date: string;
  startTime: string;
  endTime: string;
  activity: string;
}

const ScheduleSchema: Schema = new Schema({
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  activity: { type: String, required: true },
});

const Schedule = mongoose.model<ISchedule>("Schedule", ScheduleSchema);

export default Schedule;
