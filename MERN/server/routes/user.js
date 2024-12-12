const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

router.post("/register", async (req, res) =>{
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
router.post("/login", async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({message:"User not found, please signup"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message:"Password do not match"});
    }
    const token = jwt.sign({email:user.email}, "Secret", {expiresIn: "4h"})
    return res.json({status:"true", message: "Login successful", token: token})
})

module.exports = router;