const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes')
const teamRoutes = require('./routes/teamRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
// Load environment variables from .env file
dotenv.config();

// Initialize database connection
connectDB();
const PORT = process.env.PORT || 5000;
const app = express();

// Middlewares for parsing JSON and handling cross-origin requests
app.use(express.json());
app.use(cors());
app.use('/api/projects', projectRoutes)
// Import routes



// Mount routes
app.use('/api/projects', projectRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.get('/', (req, res) => {
    res.send('Creative Hub API is running...');
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});