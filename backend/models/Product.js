const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  productNumber: {
    type: String,
  },

  productName: {
    type: String,
  },

  productCategory: {
    type: String,
  },

  productQty: {
    type: Number,
  },
});

const newProduct = mongoose.model("product", Product);

module.exports = newProduct;
