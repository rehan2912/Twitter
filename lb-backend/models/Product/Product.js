import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        size:{
            type: Number,
            required: true,
        },
        sku: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        ingredients: {
            type: Array,
            default: [],
        },
        nutrition: {
            type: Array,
            default: [],
        },
        description: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
            default: [],
        },
        diet_category: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("ProductList", ProductSchema);
export default Product;