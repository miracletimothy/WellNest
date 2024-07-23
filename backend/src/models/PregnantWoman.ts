import mongoose, { Schema, Document, Types } from "mongoose";

interface IPregnantWoman extends Document {
  name: string;
  age: number;
  contact: string;
  forms: Types.ObjectId[];
}

const PregnantWomanSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  contact: { type: String, required: true },
  forms: [{ type: Types.ObjectId, ref: "Form" }],
});

export default mongoose.model<IPregnantWoman>(
  "PregnantWoman",
  PregnantWomanSchema
);
