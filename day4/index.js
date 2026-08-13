const express = require('express');
const app = express();
const packages = require("./data/tour");

app.get("/",(req,res)=>{
    res.send("hi there !!! Welcome")
});

app.get("/packages",(req,res)=>{
const des = req.query.destination;
    if(!des){
        res.json(packages);
    }
    const result = packages.filter(item => item.destination.toLocaleLowerCase() == des.toLocaleLowerCase());
    res.json(result);
})

app.get("/packages/:id",(req,res)=>{
    const id = Number(req.params.id);
    const onePack = packages.find(item=>item.id == id);
    res.json(onePack);
})





app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})