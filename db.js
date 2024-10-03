const mysql = require("mysql")

const dbconnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "car_service"
})

dbconnection.query("SELECT * FROM mechanics", (err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})