console.log("Hi! There");  //do npm run start bcz in script i used index.js

const math = require("./maths");  // Importing different modules using path
console.log(math.sub(43,34));

// Create HTTP Server through node

const http = require("http");
const PORT = 3000;
const server = http.createServer(function(req,res){
    console.log(req);
    res.end("Recieved your Request");
});

server.listen(PORT,()=>{
    console.log("Server Started");
})