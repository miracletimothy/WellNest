import { Schema, model, Document } from "mongoose";

interface IChat extends Document {
  participants: string[];
}

const chatSchema = new Schema<IChat>({
  participants: [{ type: String, required: true }],
});

const Chat = model<IChat>("Chat", chatSchema);

export default Chat;
