const express = require("express");
const app = express();

const studentArray = require("./initialData");

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get("/api/student/:id", (req, res) => {
    let id = req.params.id;
    if(!isNaN(id)){
        let student = studentArray.find((item)=>{
            return (item.id === parseInt(id));
        })
        if(student === undefined){
            res.status(400).send("Student not found");
        }
        res.send(student);
    }else{
        res.status(400).send("Invalid id")
    }
    
    res.send(student);
})

app.listen(4000, ()=> {
    console.log('Server running on port 4000');
})