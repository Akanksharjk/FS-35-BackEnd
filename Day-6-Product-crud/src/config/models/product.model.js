const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            require: true
        },
        price: {
            currency: {
                type: String,
                require: true
            },
            amount: {
                type: Number,
                require: true
            }
        },
        description: String,
        catogery: {
            type: String,
            require: true
        }
    }, {
    timestamps: true
})

const productModel = mongoose.model("product", productSchema)
module.exports = productModel