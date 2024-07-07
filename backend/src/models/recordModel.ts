import { Schema, model } from 'mongoose';

const recordSchema = new Schema({
	patient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	healthWorker: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	details: { type: String, required: true },
	date: { type: Date, default: Date.now },
});

const Record = model('Record', recordSchema);
export default Record;
