const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { 
        type: String, required: true
    },
    category: String,
    description: String,
    price: {
        type: Number, required: true
    },
    oldPrice: Number,
    image: String,
    platform: String,
    rating: {
        type: Number, default: 0
    },
    author: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;