import { Schema, model } from 'mongoose';

const appointmentSchema = new Schema({
	date: { type: Date, required: true },
	patient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	healthWorker: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	status: { type: String, default: 'Pending' },
});

const Appointment = model('Appointment', appointmentSchema);
export default Appointment;
