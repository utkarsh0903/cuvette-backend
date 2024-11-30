const express = require("express");
const path =require("path");
const app = express();

var filePath = path.join(__dirname, "public");

app.use(express.static(filePath));

app.get('/', (req, res)=> {
    res.sendFile(__dirname, "public", "index.html")
})

app.listen(3000, ()=> {
    console.log(filePath)
    console.log(`Server running on port 3000`)
})