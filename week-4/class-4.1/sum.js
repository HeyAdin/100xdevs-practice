const express = require('express');
const app = express();
const PORT = 3000;
const cors = require("cors");
app.use(cors());

app.get('/sum', (req , res)=>{
    const num1 = +req.query.num1;
    const num2 = +req.query.num2;
    const result = num1+num2;
    res.send(`Sum of ${num1} and ${num2} is = ${result}`);
    // return result;
});

app.listen(PORT , ()=>{
    console.log("Server Started");
});