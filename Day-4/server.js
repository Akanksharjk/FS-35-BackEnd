const express = require('express')
const app = express()
app.use(express.json())
const ganjaArr = [
    {
        ganja: "weed",
        rate: "400"
    },
    {
        ganja: "maal",
        rate: "500"
    },
    {
        ganja: "lekha",
        rate: "350"
    },
    {
        ganja: "charas",
        rate: "200"
    },
    {
        ganja: "golmal",
        rate: "700"
    }
]

app.post('/ganja', (req, res) => {
    try {
        let { ganja, rate } = req.body

        if (!ganja || !rate) {
            return res.json({
                success: false,
                message: "All fields are required"
            })
        }
        ganjaArr.push({
            ganja,
            rate,
        })

    } catch (error) {
        return res.status(201).json({
            success: false,
            message: "Internal server Error"
        })
    }
})

app.get('/data', (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "data fetched successfully",
            data: ganjaArr
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: "Internal server error"
        })
    }
})

app.patch('/update/:id', (req, res) => {
    let { id } = req.params
    let { name } = req.body

    if (!name)
        return res.status(400).json({
            success: false,
            message: "please send update date"
        })
    let updateData = ganjaArr.find((elem) => elem.ganja === id)

    if (!updateData) return res.status(404).json({
        success: false,
        message: "Data not found with that id"
    })

    updateData.ganja = name
    return res.status(200).json({
        success: true,
        message: "data update",
        data: ganjaArr
    })
})

app.listen(3000, () => {
    console.log("server in runing port on 3000")
})