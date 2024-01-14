// Authentication and ZOD 
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/login',(req,res)=>{
    res.send();
});

app.listen(PORT,()=>{
    console.log('Server Started');
})