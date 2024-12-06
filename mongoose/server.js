const express = require("express");
const app = express();
const connectDb = require("./config/db");
const PORT = 4000;

// const mongoose = require("mongoose");

connectDb().then(()=>{
    app.on('error', (error) => {
        console.log("App connection failed", error);
        process.exit(1)
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Listening on PORT: ${PORT}`);
    })
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed !!", error);

});

// const studentSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   email: String,
// });

// const students = mongoose.model("Student", studentSchema);