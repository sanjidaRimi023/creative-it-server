const { default: mongoose } = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    imageUrl: { type: String, required: true },
    linkedinUrl: { type: String, default: "" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Team", teamSchema);
