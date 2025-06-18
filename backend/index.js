const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const FormDataModel = require('./models/FormData');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/practice_mern')
    .then(() => {
        console.log("MongoDB connected");

        const adminEmail = "admin@hyperverge.co";
        const adminPassword = "admin123";
        const adminName = "Admin";

        FormDataModel.findOne({ email: adminEmail }).then(admin => {
            if (!admin) {
                FormDataModel.create({
                    name: adminName,
                    email: adminEmail,
                    password: adminPassword,
                    role: "admin"
                }).then(() => console.log("Admin user created"));
            }
        });
    }).catch(err => console.error("MongoDB connection error:", err));

app.post('/register', (req, res) => {
    const { email } = req.body;
    FormDataModel.findOne({ email }).then(user => {
        if (user) {
            res.json("Already registered");
        } else {
            FormDataModel.create(req.body)
                .then(newUser => res.json(newUser))
                .catch(err => res.json(err));
        }
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    FormDataModel.findOne({ email }).then(user => {
        if (user) {
            if (user.password === password) {
                res.json({ message: "Success", role: user.role });
            } else {
                res.json({ message: "Wrong password" });
            }
        } else {
            res.json({ message: "No records found!" });
        }
    });
});

app.listen(3001, () => {
    console.log("Server listening on http://127.0.0.1:3001");
});