const express = require('express')
const connectDB = require('./src/config/db')
const productModel = require('./src/config/models/product.model')

const app = express()

connectDB()

app.use(express.json())

app.post('/api/product/create', async (req, res) => {
    try {
        const { productName, currency, amount, description, category } = req.body

        if (!productName || !currency || !amount || !description || !category) {
            return res.status(400).json({
                success: false,
                message: "All fileds are require"
            })
        }

        const newProduct = await productModel.create({
            productName,
            price: {
                currency,
                amount
            },
            description,
            category
        })

        return res.status(201).json({
            success: true,
            message: "Product Created",
            data: newProduct
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
})

app.get('/api/product', async (req, res) => {
    try {
        let allProduct = await productModel.find()

        return res.status(200).json({
            success: true,
            message: "All product fetched",
            data: allProduct
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
})

app.listen(3000, () => {
    console.log("server is runing on port 3000")
})