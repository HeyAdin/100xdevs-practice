require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
app.use(express.json());
mongoose.connect(process.env.mongoUrl);

const User = mongoose.model('new user', { name: String, email: String, password: String });

app.post('/signin', async (req, res) => {
    const name  = req.body.name;
    const password  = req.body.password;
    const email = req.body.email;
    const existingUser = await User.findOne({email : email});
    if(existingUser){
        return res.status(400).json({msg : "User Already Exists"});
    }

    const user = new User({
        name,
        email,
        password
    });

    user.save();
    res.json({
        msg : "Done"
    });
});

app.listen(PORT);

