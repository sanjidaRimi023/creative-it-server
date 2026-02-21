const { default: mongoose } = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, 
    location: { type: String, required: true }, 
    bgColor: { type: String, required: true }, 
    liveLink: { type: String, default: "" },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Project", projectSchema);
