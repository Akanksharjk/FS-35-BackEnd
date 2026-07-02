const productModel = require("../models/product.model")

const createProduct = async (req, res) => {
    try {
        const { name, description, brand, category, price, discountPrice, costPrice, stock, ratings } = req.body

        if (!name || !description || !brand || !category || !price || !discountPrice || !costPrice || !stock || !ratings) {
            return res.status(400).json({
                success: false,
                message: "All fields are require"
            })
        }

        const newProduct = await productModel.create({
            name,
            description,
            brand,
            category,
            pricing: {
                price,
                discountPrice,
                costPrice
            },
            stock,
            ratings
        })

        return res.status(201).json({
            success: true,
            message: "product create successfully",
            data: newProduct
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })

    }
}
module.exports = createProduct