const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongoose://localhost:27017").then(()=>{
    console.log("Connected to mongodb")
})

app.listen(3000, ()=> {
    console.log("Listening on port 3000")
})