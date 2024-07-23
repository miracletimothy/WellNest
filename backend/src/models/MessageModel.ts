import { Schema, model, Document } from "mongoose";

interface IMessage extends Document {
  text: string;
  sender: string;
  receiver: string;
  chatId: string;
  timestamp: Date;
}

const messageSchema = new Schema<IMessage>({
  text: { type: String, required: true },
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  chatId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Message = model<IMessage>("Message", messageSchema);

export default Message;
