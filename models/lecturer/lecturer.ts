import mongoose from "mongoose";

const LecturerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  collections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
});

export const Lecturer = mongoose.model("Lecturer", LecturerSchema);
