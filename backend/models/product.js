const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    quantity: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// this will create a collection called products in the database
const product = mongoose.model("Product", productSchema);

module.exports = product;
