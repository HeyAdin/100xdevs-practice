const express = require('express');
const app = express();
const PORT = 3000;

app.get('/health-checkup', (req, res) => {
    const noOfKidneys = req.query.kidney;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "heyAdin" && password != "12341234"){
        res.status(403).json({
            msg: "User doesn't exist",
        });
        return;
    }
    if(!(noOfKidneys>=1 && noOfKidneys<=2)){
        res.status(411).json({
            msg : "Wrong inputs",
        });
        return;
    }

    res.send("Your Heart is Healthy");
});

app.listen(PORT, () => {
    console.log(`Server Started`);
});