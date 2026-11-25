const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const leadRoutes = require('./routes/leadRoutes');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authmiddleware');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/leads', authMiddleware, leadRoutes);
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('LeadFlow CRM Backend is Running!');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected Successfully!');

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('MongoDB Connection Error:', error.message);
    });