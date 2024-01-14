// Authentication and ZOD 
const express = require('express');
const app = express();
const PORT = 3000;

// import zod 
const z = require(zod);

app.get('/login',(req,res)=>{
    res.send();
});

app.listen(PORT,()=>{
    console.log('Server Started');
});