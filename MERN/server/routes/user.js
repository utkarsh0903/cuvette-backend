const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
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

module.exports = router;