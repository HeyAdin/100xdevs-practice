const express = require('express');
const app = express();
const PORT = 3000;
const cors = require("cors");
app.use(cors(),express.json());

app.get('/sum', (req , res)=>{
    const num1 = +req.query.num1;
    const num2 = +req.query.num2;
    const result = num1+num2;
    res.send(`Sum of ${num1} and ${num2} is = ${result}`);
    // return result;
});

app.get('/interest',(req , res)=>{
    const principle = +req.query.principle;
    const time = +req.query.time;
    const rate = +req.query.roi;
    const interest = (principle*rate*time)/100;
    const totalAmount = interest+principle;
    res.json({
        totalAmount,
        interest
    });
});

app.listen(PORT , ()=>{
    console.log("Server Started");
});