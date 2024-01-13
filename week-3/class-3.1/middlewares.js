const express = require('express');
const app = express();
const PORT = 3000;

function userMiddlewares(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "heyAdin" && password != "password"){
        res.status(403).json({
            msg : "User Not Found",
        });
    }
    else{
        next();
    }
}