const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/users',(req,res)=>{

});

app.post('/signin',(req,res)=>{

});

app.listen(PORT,()=>{
    console.log("Server Started");
});