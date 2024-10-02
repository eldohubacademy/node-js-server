// to us a module , we improt/require the module

const fsmod = require("fs")

// fsmod.writeFileSync("styles.css", "hello this is css content", "utf-8")
fsmod.appendFileSync("try.js", "console.log('maajabuuuu')", "utf-8")

fsmod.readdir(".",(err,files)=>{
    console.log(files);  
    files.forEach(file=>{
        if(file.endsWith(".css")){
            fsmod.unlinkSync(file)
        }
    })  
})