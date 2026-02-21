const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    clientName: { 
      type: String, 
      required: true 
    },
    review: { 
      type: String, 
      required: true 
    },
    image: { 
      type: String, 
      required: true 
    }, 
    role: { 
      type: String, 
      required: true 
    }, 
    location: { 
      type: String, 
      required: true 
    }, 
    country: { 
      type: String, 
      required: true 
    }, 
    rating: { 
      type: Number, 
      required: false, 
      min: 1, 
      max: 5,
      default: 5 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);