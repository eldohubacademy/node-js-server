const express = require("express")

const mysql = require("mysql")

const dbconnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "carservice"
})

const app = express() // expresss (web server framework) -- routing e.g /mechanics 

app.get("/mechanics", (req,res)=>{

    dbconnection.query("SELECT * FROM mechanics", (err,data)=>{
        if(err){
            console.log(err);
            res.send("database error")
        }else{
            console.log(data);
            res.render("mechanics.ejs", {mechanics: data})
        }
    })
})
app.get("/services",(req,res)=>{
})
app.post("/contact",(req,res)=>{
    // insert into 
    res.send("jhjhh")
})

app.listen(5000)