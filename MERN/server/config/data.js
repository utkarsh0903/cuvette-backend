const mongoose = require("mongoose");

const connectDb = () =>{
    mongoose.connect("mongodb+srv://utkarshgarg0903:pgpjuly@cluster0.s1kz7.mongodb.net/student").then(()=>{
        console.log("Mongodb connected")
    })
}

module.exports = connectDb;