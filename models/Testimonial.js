const { default: mongoose } = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true },
    designation: { type: String, required: true },
    message: { type: String, required: true },
    rating: { type: Number, required: false, min: 1, max: 5 },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Testimonial", testimonialSchema);
