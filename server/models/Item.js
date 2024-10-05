const mongoose = require('mongoose');

// Define a schema for an item
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

// Create the model from the schema
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
