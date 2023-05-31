import mongoose, { Schema } from "mongoose";

const LecturerSchema = new Schema({
  name: { type: String, required: true },
  subjects: [{ type: Schema.Types.ObjectId, ref: "Subject" }],
});

export const Lecturer = mongoose.model("Lecturer", LecturerSchema);
