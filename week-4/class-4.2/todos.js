const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json(), cors());

app.get('/', (req, res) => {
    res.json({
        todo: [{
            title: "Take Bath",
            description: "Do 30 pull-ups daily",
            id: 1
        },
        {
            title: "Get Meal",
            description: "Finish the assignment by the end of the day.",
            id: 1
        },{
            title: "Take Bath",
            description: "Do 30 pull-ups daily",
            id: 1
        },
        {
            title: "Get Meal",
            description: "Finish the assignment by the end of the day.",
            id: 1
        }]
    });
});

app.listen(port,()=>{
    console.log("Server Started");
});