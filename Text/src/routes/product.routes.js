const express = require('express')
const createProduct = require('../controllers/product.controllers')

const router = express.Router()

router.post('/', createProduct)

module.exports = router