import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema(
  {
    page: { type: String, required: true, unique: true }, // e.g. "home", "mortgage", "about"
    data: { type: mongoose.Schema.Types.Mixed, required: true }, // flexible JSON content
  },
  { timestamps: true }
);

export default mongoose.models.Content || mongoose.model("Content", ContentSchema);