const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.json({
        msg :"Hey everything is fine",
        status : "200 OK",
    });
});

app.listen(PORT,()=>{
    console.log("Server Started");
});