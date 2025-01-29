import express from "express";
import {
  getAllProducts,
  getProductByIdHandler,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductByIdHandler);

export default router;
