const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json(),userMiddlewares);

function userMiddlewares(req,res,next){
    const username = req.headers.username;
    console.log(username);
    const password = req.headers.password;
    console.log("user Middleware entered" );
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



// Input validation is done by using list of if-else check and other method is doing is by using a library called ZOD
app.get('/health-checkup',(req,res)=>{
    const kidneys = req.body.kidney;
    const kidneyLength = kidneys.length;

    res.send(`You have ${kidneyLength} kidneys`);
    console.log("You made it to request section");
});

app.get('/heart-checkup',(req,res)=>{
    res.send("Your Heart Health is Good");
    console.log("You made it to request section");
});

// If client sends invalid inputs instead showing all the data that will cause risk of secuirity and data leak send a msg.

app.use((err,req,res,next)=>{
    console.log(err);
    res.json({
        msg:"Something is up with our server",
    });
});

app.listen(PORT,()=>{
    console.log("Server Started");
});