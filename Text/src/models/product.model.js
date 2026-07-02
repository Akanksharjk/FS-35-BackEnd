const { default: mongoose } = require("mongoose");

const productShcema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    pricing: {
        price: {
            type: Number,
        },
        discountPrice: {
            type: Number
        },
        costPrice: {
            type: Number
        }
    },
    stock: {
        type: Number
    },
    ratings: {
        type: Number
    }

}, {
    timestamps: true
})

const productModel = mongoose.model("products", productShcema)

module.exports = productModel