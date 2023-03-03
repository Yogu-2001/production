import mongoose from "mongoose";

const placementSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    jdfile: {
      type: String,
      required: true,
    },
    branchcriteria: {
      type: Array,
      default: [],
    },
    engAggrrpercentCriteria: {
      type: Number,
      default: NaN,
    },
    editorData: {
      type: String,
      required: true,
    },
    driveDate: {
      type: Date,
      required: true,
    },
    postedAt: {
      type: Date,
      default: Date.now,
    },
    postedBy: {
      type: String,
      default: "Zoya Chaudary",
    },
    hr: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("placement", placementSchema);
