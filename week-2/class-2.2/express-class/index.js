const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/files', (req, res) => {
      res.sendStatus(200);
    fs.readdir('./files', (err, data) => {
        if (err) {
            console.log("Error Getting FIles");
        }
        else {
            let files = [];
            data.forEach(file => {
                console.log(file);
                files.push(file);
            })
            res.send(files);
        }
    })
});

app.get('/files/:filname', (req, res) => {
    const fileName = req.params.filname;
    fs.readFile('./files/' + fileName, "utf-8", (err, data) => {
        console.log(data);
        res.send(data);
    })
});

app.listen(PORT, () => {
    console.log("Server Started");
});