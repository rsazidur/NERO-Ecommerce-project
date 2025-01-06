const express = require('express');
const Product = require('./products.model');
const Reviews = require('../reviews/reviews.model');
const router = express.Router();


//  post a product
router.post("/create-product", async (req, res) => {
    try {
        const newproduct = new Product({
            ...req.body
        })

        const savedProduct = await newproduct.save();
        // calculate review
        const reviews = await Reviews.find({productId: savedProduct.id});
        if (reviews.length > 0) {
            const totalRating = reviews.reduce((acc, review) => 
            acc + review.rating, 0);

            const averageRating = totalRating / reviews.length;
            savedProduct.rating = averageRating;
            await savedProduct.save();
        }

        res.status(201).send(savedProduct);
    } catch (error) {
        console.error("Error in creating product: ", error);
        res.status(500).send({ message: "Failed to create new product" });
    }    
});

// get all products
router.get("/", async (req, res) => {
    try {
        const {category, platform, minPrice, maxPrice, page=1, limit = 10} = req.query;
        let filter = {};
        if (category && category !== "all") {
            filter.category = category;
        }
        if (platform && platform !== "all") {
            filter.platform = platform;
        }
        if (minPrice && maxPrice) {
            const min = parseFloat(minPrice);
            const max = parseFloat(maxPrice);
            if(!isNaN(min) && !isNaN(max)) {
                filter.price = {$gte: min, $lte: max};
            }
        }
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const totalProducts = await Product.countDocuments(filter);
        const totalPages = Math.ceil(totalProducts / parseInt(limit));
        const products = await Product.find(filter).skip(skip).limit(parseInt(limit))
                        .populate("author", "email").sort({createdAt: -1});

        res.status(200).send({products, totalPages, totalProducts});
    } catch (error) {
        console.error("Error fetching products: ", error);
        res.status(500).send({ message: "Error fetching products" });
    }
});

// get single product

module.exports = router;