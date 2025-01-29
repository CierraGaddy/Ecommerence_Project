import { getProducts, getProductById } from "../Model/productModel.js";

// Fetch all products or apply filters
export const getAllProducts = (req, res) => {
  const { category, minPrice, maxPrice } = req.query;

  // Validate query parameters
  if (minPrice && isNaN(minPrice)) {
    return res.status(400).json({ message: "Invalid minPrice value" });
  }
  if (maxPrice && isNaN(maxPrice)) {
    return res.status(400).json({ message: "Invalid maxPrice value" });
  }

  // Fetch products with optional filtering
  Product.getProducts({ category, minPrice, maxPrice })
    .then((products) => res.json(products))
    .catch((err) =>
      res
        .status(500)
        .json({ message: "Error fetching products", error: err.message })
    );
};

// Fetch product by ID
export const getProductById = async (req, res) => {
  const { id } = req.params;

  // Validate the ID
  if (!id || isNaN(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const product = await Product.getProductById(parseInt(id, 10));
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
