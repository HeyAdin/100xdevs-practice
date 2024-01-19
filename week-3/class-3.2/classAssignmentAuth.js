const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const key = "123456789";

app.use(express.json());

const All_USERS = [
    {
        username: "aadin",
        password: "123123",
        name: "Adin"
    },
    {
        username: "jane",
        password: "12361236",
        name: "Jane Doe"
    },
    {
        username: "heyAdin",
        password: "12341234",
        name: "Ahmad"
    },
    {
        username: "john",
        password: "12351235",
        name: "John Doe"
    },
];

function userExist(username, password) {
    for (const user of All_USERS) {
        if (username == user.username && password == user.password) {
            return true;
        }
    }
    return false;
}

app.get('/users', (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, key);
        const username = decoded.username;
        // return a list of users other than this username
        // const users = All_USERS.find
        const USERS = All_USERS.filter((user) => {
            if (user.username == username) {
                return false;
            }
            return true;
        })
        res.json({ USERS });
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExist(username, password)) {
        return res.status(403).json({
            msg: "Ye hamara Ladka nahi hai"
        });
    }

    var token = jwt.sign({ username }, key);
    return res.json({
        token,
    });
});

app.listen(3000, () => {
    console.log("Server Started");
});