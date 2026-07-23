import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    companyName: { type: String },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    fundingRequirement: { type: String },
    businessNeeds: { type: String },
    formType: { type: String, default: "general" }, // e.g. mortgage, home-loan, nri, etc.
    status: { type: String, enum: ["new", "contacted", "closed"], default: "new" },
  },
  { timestamps: true }
);

export default mongoose.models.Submission || mongoose.model("Submission", SubmissionSchema);