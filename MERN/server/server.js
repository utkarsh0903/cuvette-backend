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

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})