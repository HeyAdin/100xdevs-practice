const express = require('express');
const app = express();
const PORT = 3000;

let users = [{
    name: "John Doe",
    kidneys: [{
        healthy: true
    },
    {
        healthy: false
    }],
},
{
    name: "Jane Doe",
    kidneys: [{
        healthy: true
    },
    {
        healthy: true
    }],
}]
// Health Status check
app.get('/', (req, res) => {
    const johnKidney = users[0].kidneys;
    const noOfKidneys = johnKidney.length;
    const noOfHealthyKidney = johnKidney.filter((kidney) => {
        return kidney.healthy;
    }).length;
    const noOfUnhealthyKidney = noOfKidneys - noOfHealthyKidney;
    res.json({
        noOfKidneys,
        noOfHealthyKidney,
        noOfUnhealthyKidney,
    })
});

app.use(express.json());

// Adds a new Kidney
app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy,
    });
    res.json({
        Operation: "Successful",
    })
});

app.put('/', (req, res) => {
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        transplant : "Done"
    })
});

app.delete('/', (req, res) => {
    let healthyKidney = []
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            healthyKidney.push({
                healthy : true,
            });
        }
    }
    users[0].kidneys = healthyKidney;
    res.json({
        operation : "Successful"
    })
})

app.listen(PORT, () => {
    console.log('Server Started at ' + PORT);
})