import { getProducts, getProductById } from "../Model/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await getProducts(req.query);
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res
      .status(500)
      .json({ message: "Error fetching products", error: err.message });
  }
};

export const getProductByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await getProductById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    console.error("Error fetching product:", err.message);
    res
      .status(500)
      .json({ message: "Error fetching product", error: err.message });
  }
};
