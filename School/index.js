const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send(studentArray);
})

const studentArray = require("./initialData");

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

app.post("/api/student", (req,res)=> {
    let name = "Utkarsh";
    let currentClass = 9;
    let division = 'B';
    let student = {
        id: 8,
        name: name,
        currentClass: currentClass,
        division: division
    }
    studentArray.push(student);
    res.send(studentArray);
})

app.listen(4000, ()=> {
    console.log('Server running on port 4000');
})