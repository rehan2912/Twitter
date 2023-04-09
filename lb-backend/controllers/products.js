import Product from "../models/Product/Product.js";

export const addProduct = async (req, res) => {
    try {
        const { name,
            size,
            sku,
            price,
            ingredients,
            nutrition,
            description,
            images,
            diet_category } = req.body;
        const newProduct = await new Product({
            name,
            size,
            sku,
            price,
            ingredients,
            nutrition,
            description,
            images,
            diet_category
        });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct)
    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    }
    catch (error) {
        res.status(500).json({ msg: error.message });
    }
}