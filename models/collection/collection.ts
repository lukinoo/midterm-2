import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
});

export const Collection = mongoose.model("Collection", collectionSchema);
