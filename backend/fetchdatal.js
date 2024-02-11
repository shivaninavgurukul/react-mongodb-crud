
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const DB = "mongodb+srv://shivani:shivanim@cluster0.zshwi0s.mongodb.net/updatelist?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Connection successful`);
}).catch((err) => {
    console.error("Connection failed:", err);
});

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },password: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('addnews', UserSchema);

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/getusers", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/updateuser/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const newData = req.body; // Assuming newData is an object with the updated user data

        // Your logic to update the user data in the database goes here
        const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: `User with ID ${userId} not found` });
        }

        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.post("/createuser", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(5005, () => {
    console.log("Server is running on port 5000");
});
