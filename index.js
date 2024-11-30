const express = require("express");
const app = express();

const customMiddleware = (req, res, next) =>{
    console.log("In Middleware");
    next();
}

//Generic Middleware
// app.use(customMiddleware);

app.get('/',customMiddleware,  (req, res)=> {
    res.send("Hello World");
    // res.sendFile(__dirname, "public", "index.html");
})

//Creating middleware for particular route
// app.get('/me',customMiddleware, (req, res) => { 
//     res.send("Hello Me");
// })

app.get('/me', (req, res) => {
    res.send("Hello Me");
})

app.listen(3000, ()=> {
    console.log(`Server running on port 3000`)
})