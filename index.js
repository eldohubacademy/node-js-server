const http = require("http")

http.createServer((req,res)=>{
    console.log(req.headers);
    res.end("hello!! A message from Albert's server")
    // routes
    // templates -- html -- regerate
    
}).listen(8000)

// web server frameworks ---   express js + ejs+ mysql