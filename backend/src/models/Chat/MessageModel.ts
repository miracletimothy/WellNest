import { Schema, model, Document } from "mongoose";

interface IMessage extends Document {
  text: string;
  role: "pregnant_woman" | "health_worker";
  time: Date;
}

const messageSchema = new Schema<IMessage>({
  text: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["pregnant_woman", "health_worker"],
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

const Message = model<IMessage>("Message", messageSchema);

export default Message;
