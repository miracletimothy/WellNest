import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
	content: { type: String, required: true },
	sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	receiver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	timestamp: { type: Date, default: Date.now },
});

const Message = model('Message', messageSchema);
export default Message;
