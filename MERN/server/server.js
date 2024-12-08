const express =require("express");
const connectDb = require("./config/data");
const User = require("./model/User");
const app = express();

connectDb();
app.use(express.json());

app.post("/register", async (req, res) =>{
    const {username, email, password} = req.body;
    const newUser = new User({
        username,
        email,
        password
    })
    await newUser.save();
    res.json("Registration done successfully");
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})