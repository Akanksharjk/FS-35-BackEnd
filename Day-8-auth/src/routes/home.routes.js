const express = require('express')
const authMiddleware = require('../middleware/auth.middleware')

const router = express.Router()

router.get('/', authMiddleware, (req, res)=>{
    res.status(200).json({
        message : "I m Home Route"
    })
})
module.exports = router