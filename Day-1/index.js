const express = require("express");
const app = express();

app.get("/text", (req, res) => {
  res.send("This is My Server");
});
app.listen(3000, () => {
  console.log("Server is runing PORT 3000");
});
