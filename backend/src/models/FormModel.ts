import mongoose, { Schema, Document } from "mongoose";

interface IForm extends Document {
  formType: string;
  data: any;
  woman: mongoose.Types.ObjectId;
  completed: boolean;
}

const FormSchema: Schema = new Schema({
  formType: { type: String, required: true },
  data: { type: Schema.Types.Mixed, default: {} },
  woman: {
    type: mongoose.Types.ObjectId,
    ref: "PregnantWoman",
    required: true,
  },
  completed: { type: Boolean, default: false },
});

export default mongoose.model<IForm>("Form", FormSchema);
