const express = require("express");
const {
  postProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} = require("../controllers/productController");

const router = express.Router();

// get all products
router.get("/", getAllProducts);

// get single product
router.get("/:id", getSingleProduct);

// post a product
router.post("/", postProduct);

// update a product
router.patch("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
