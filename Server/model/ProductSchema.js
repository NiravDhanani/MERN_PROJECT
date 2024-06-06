const mongoose = require('mongoose');

const ProductData = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'category',
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    product_description: { 
        type: String,
        required: true,
    },
    product_offer_price: {
        type: Number, 
        required: true,
    },
    product_price: {
        type: Number, 
        required: true,
    },
    product_status: {
        type: Number,
        required: true,
    },
    product_image : {
        type : String,
    },
    product_public_id : {
        type : String,
        require : true,
    }
});

const Product = mongoose.model("Product", ProductData);

module.exports = Product;
