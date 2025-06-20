const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const FormDataModel = require('./models/FormData');

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true}));

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
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
  })
  .catch(err => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => {
  res.send({ activeStatus: true, error: false });
});

app.post('/register', async (req, res) => {
  const { email } = req.body;
  const existingUser = await FormDataModel.findOne({ email });
  if (existingUser) {
    return res.json("Already registered");
  }
  try {
    const newUser = await FormDataModel.create(req.body);
    return res.json(newUser);
  } catch (error) {
    return res.json(error);
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await FormDataModel.findOne({ email });
  if (!user) return res.json({ message: "No records found!" });
  if (user.password !== password) return res.json({ message: "Wrong password" });

  res.json({ message: "Success", role: user.role });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));