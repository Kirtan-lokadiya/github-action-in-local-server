require('dotenv').config(); // This line should be the first
const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/Item');
const cors = require('cors');

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas using the connection string from your .env file
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello from MERN Stack Backend!');
});


// POST route to add a new item
app.post('/api/items', async (req, res) => {
    const { name } = req.body;

    try {
        const newItem = new Item({ name });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
});

// GET route to fetch all items
app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
});


// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
