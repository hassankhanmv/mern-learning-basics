const Product = require("../models/product");
const mongoose = require("mongoose");

// get All Products
const getAllProducts = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });
  res.status(200).json(products);
};

// get Single Product
const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "Product not found" });
  }

  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({ msg: "Product not found" });
  }
  res.status(200).json(product);
};

// create a product

const postProduct = async (req, res) => {
  const { title, description, price, image, category, quantity } = req.body;

  // Add Doc to DB
  try {
    const product = await Product.create({
      title,
      description,
      price,
    });
    res.status(200).json(product);
  } catch (error) {
    console.log(error, "error");
    res.status(400).json({ message: error.message });
  }
};

// update a product

const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ msg: "Product not found" });
  }

  const product = await Product.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!product) {
    return res.status(404).json({ msg: "Product not found" });
  }
  res.status(200).json(product); 
};

// delete a product

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "Product can not be deleted" });
  }

  const product = await Product.findByIdAndDelete({ _id: id });

  if (!product) {
    return res.status(404).json({ msg: "Product not found" });
  }
  res.status(200).json(product);
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  postProduct,
  updateProduct,
  deleteProduct,
};
