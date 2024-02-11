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

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    instock_count: {
        type: String,
        required: true,
    },
    product_image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    created_at: {
        type: String,
        required: true,
    },
    Manufacturer: {
        type: String,
        required: true,
    },
    Manufactured_date: {
        type: String,
        required: true,
    },
    expriy_date: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
// Product schema fields...

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }, password: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    // User schema fields...
});

const Product = mongoose.model('productdatas', ProductSchema);
const User = mongoose.model('addnews', UserSchema);

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Product routes
app.get("/getproducts", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    // Fetch products logic...
});

app.put('/updateproduct/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const newData = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(productId, newData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: `Product with ID ${productId} not found` });
        }

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update product logic...

app.post("/createproduct", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    // Create product logic...
});

// User routes
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

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if the email and password match a user in your database
        // If the credentials are valid, return the user object
        // Otherwise, return an error response
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.listen(5005, () => {
    console.log("Server is running on port 5005");
});
