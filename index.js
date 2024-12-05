const express = require("express");
const app = express();
app.set("view engine", "ejs");

// app.use(express.static('public'));
const customMiddleware = (req, res, next) =>{
    console.log("In Middleware");
    next();
}

const customMiddleware2 = (req, res, next) =>{
    console.log("In Middleware 2");
    next();
}

//Generic Middleware
app.use(customMiddleware);
app.use(customMiddleware2);

app.get('/',  (req, res)=> {
    res.render("index");
    // res.send("Hello World");
    // res.sendFile(__dirname, "public", "index.html");
})

app.get("/about", (req, res) => {
    res.render("about")
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