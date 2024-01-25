const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json(), cors);

app.get('/todos', (req, res) => {
    res.json({
        todo: [{
            title: "Do Exercise",
            description: "Do 30 pull-ups daily",
            id: 1
        },
        {
            title: "Complete Task",
            description: "Finish the assignment by the end of the day.",
            id: 1
        }]
    });
});