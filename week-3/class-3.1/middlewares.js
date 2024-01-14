const express = require('express');
const app = express();
const PORT = 3000;

function userMiddlewares(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    console.log("user Middleware entered");
    if(username != "heyAadin" && password != 12341234){
        res.status(403).json({
            msg : "User Not Found",
        });
    }
    else{
        console.log("user middleware passed");
        next();
    }
};

function kidneyMiddlewares(req,res,next){
    console.log("Kidney Middleware entered");
    const kidneyID = req.query.kidney;
    console.log(kidneyID);
    if(kidneyID != 1 && kidneyID != 2){
        res.status(411).json({
            msg : "Invalid Input",
        });
    }
    else{
        console.log("kidney middleware passed");
        next();
    }
};

app.get('/health-checkup',userMiddlewares,kidneyMiddlewares,(req,res)=>{
    res.send("Your Kidney Health is Good");
});

app.listen(PORT,()=>{
    console.log("Server Started");
});