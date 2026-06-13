const express = require('express')
const app = express()
const notes = []
app.use(express.json())

app.get('/notes', (req, res) => {
    res.send(notes)
})
app.post('/notes', (req, res) => {
    console.log(req.body)
    notes.push(req.body)
    res.json({
        message: "sussafully"
    })
})
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index
    delete notes[index]
    res.json({
        message: 'this message was deleted sussafully'
    })
})
app.patch('/notes/:index', (req, res) => {
    const index = req.params.index
    const { title } = req.body
    notes[index].title = index
    res.json({
        message: "this message was updated sussafully"
    })
})
app.listen(3000, () => {
    console.log("server in runing on port 3000")
})