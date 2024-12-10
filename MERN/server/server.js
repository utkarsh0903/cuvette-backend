const express =require("express");
const connectDb = require("./config/data");
const bcrypt = require("bcrypt");
const cors = require("cors");
const User = require("./model/User");
const app = express();

connectDb();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) =>{
    const {username, email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
       return res.status(400).json("User already exist")
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = new User({
        username,
        email,
        password: hashedPass
    })
    await newUser.save();
    res.json("Registration done successfully");
})

//for login post as set up in rules because data is taken from frontend.
app.post("/login", async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({message:"User not found, please signup"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message:"Password do not match"});
    }
    return res.json({message: "Login successful"})
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})