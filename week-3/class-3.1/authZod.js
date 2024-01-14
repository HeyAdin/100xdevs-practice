// Authentication and ZOD 
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// import zod 
const z = require('zod');
function validateInput(obj){
    const schema = z.object({
        email : z.string().email(),
        password : z.string().min(8),
    });
    const response = schema.safeParse(obj);
    return response;
};

app.get('/login',(req,res)=>{
    const response = validateInput(req.body);
    console.log(response);
    if(!response.success){
        res.status(403).send("wrong input");
        return;
    }
    res.json({response});
});

app.listen(PORT,()=>{
    console.log('Server Started');
});