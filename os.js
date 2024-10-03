const os = require("os")

console.log(os.uptime());
console.log(os.platform());
console.log(os.type());
console.log(os.networkInterfaces()["Wi-Fi"][1].address );
