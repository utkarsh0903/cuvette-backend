const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/pgpjuly").then(()=>{
    console.log("Connected to mongodb")
})

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

const students = new mongoose.model("Student", studentSchema);

const addData = ()=> {
    const student1 = new students({
        name: "Utkarsh",
        age: 25,
        email: "utkarshgarg871@gmail.com"
    })
    student1.save();
}

addData();

app.listen(3000, ()=> {
    console.log("Listening on port 3000")
})