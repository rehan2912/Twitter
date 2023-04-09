import express from "express";
import { addProduct, getAllProducts } from "../controllers/products.js";

const router = express.Router();

router.post("/", addProduct);

//POSIBLE ROUTES FOR FUTURE
router.get("/", getAllProducts);
// router.get("/:pid", getProduct);
// router.post("/reviews/:pid", addReview);

export default router;

