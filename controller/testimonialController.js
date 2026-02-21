const Testimonial = require('../models/Testimonial');

// Fetches all testimonials
const getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find().sort({ createdAt: -1 });
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching testimonials', error: error.message });
    }
};

// Creates a new testimonial
const createTestimonial = async (req, res) => {
    try {
        const newTestimonial = new Testimonial(req.body);
        const savedTestimonial = await newTestimonial.save();
        res.status(201).json(savedTestimonial);
    } catch (error) {
        res.status(400).json({ message: 'Error creating testimonial', error: error.message });
    }
};

// Updates an existing testimonial
const updateTestimonial = async (req, res) => {
    try {
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );
        if (!updatedTestimonial) return res.status(404).json({ message: 'Testimonial not found' });
        res.status(200).json(updatedTestimonial);
    } catch (error) {
        res.status(400).json({ message: 'Error updating testimonial', error: error.message });
    }
};

// Deletes a testimonial
const deleteTestimonial = async (req, res) => {
    try {
        const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);
        if (!deletedTestimonial) return res.status(404).json({ message: 'Testimonial not found' });
        res.status(200).json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting testimonial', error: error.message });
    }
};

module.exports = { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial };