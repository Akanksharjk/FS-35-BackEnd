const express = require('express')
const app = express()
const arr = []
app.use(express.json())
app.get('/post', (req, res) => {
    res.send(arr)
})
app.post('/getData', (req, res) => {
    console.log(req.body);
    arr.push(req.body)
    res.send("ok")
})
app.listen(3000, () => {
    console.log("Server is runing on PORT 3000");

})