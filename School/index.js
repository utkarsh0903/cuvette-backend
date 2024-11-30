const express = require("express");
const app = express();

const studentArray = require("./initialData");
console.log(studentArray)

app.listen(4000, ()=> {
    console.log('Server running on port 4000');
})