const express = require('express');
const app = express();
const PORT = 3000;

app.get('/sum', (req , res)=>{
    const num1 = +req.query.num1;
    const num2 = +req.query.num2;
    const result = num1+num2;
    return result;
});

app.listen(PORT , ()=>{
    console.log("Server Started");
});