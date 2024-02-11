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
const Product = mongoose.model('productdatas', ProductSchema);

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/getproducts", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
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

app.post("/createproduct", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(5005, () => {
    console.log("Server is running on port 5005");
});
