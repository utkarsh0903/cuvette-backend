const dotenv = require("dotenv");
dotenv.config();
const express =require("express");
const connectDb = require("./config/data");
const bcrypt = require("bcrypt");
const cors = require("cors");
const User = require("./model/User");
const router = require("./routes/user")
const app = express();

connectDb();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 6000;

app.use("/auth", router)

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

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})