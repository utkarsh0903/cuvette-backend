const express = require("express");
const path =require("path");
const app = express();

var filePath = path.join(__dirname, "public");

app.use(express.static(filePath));

const customMiddleware = (req, res, next) =>{
    console.log("In Middleware");
    next();
}

app.get('/',  (req, res)=> {
    res.sendFile(__dirname, "public", "index.html")
})

app.get('/me',customMiddleware, (req, res) => {
    res.send("Hello Me");
})

app.listen(3000, ()=> {
    console.log(`Server running on port 3000`)
})