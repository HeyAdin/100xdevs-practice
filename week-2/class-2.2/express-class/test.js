const sum = require('./sum');
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/portfolio', (req, res) => {
    res.sendFile("/home/hey_adin/100xdevs/week-2/class-2.2/express-class/index.html");
})
app.get('/sum', (req, res) => {
    const num1 = + req.query.num1;
    const num2 = + req.query.num2;
    let mySum= sum(num1,num2);
    const result = `Sum of ${num1} and ${num2} is ${mySum}`;
    res.send(`Sum of ${num1} and ${num2} is ${mySum}`);
})
app.listen(PORT, () => {
    console.log("Server Started");
})