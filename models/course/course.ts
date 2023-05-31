import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lecturer: { type: mongoose.Schema.Types.ObjectId, ref: "Lecturer" },
});

export const Course = mongoose.model("Course", CourseSchema);
