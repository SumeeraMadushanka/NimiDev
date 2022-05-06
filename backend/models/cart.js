const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cart = new Schema({
  productNumber: {
    type: String,
  },

  productName: {
    type: String,
  },

  productCategory: {
    type: String,
  },

  productPrice: {
    type: Number,
  },

  productQty: {
    type: Number,
  },
  productImage: {
    type: String,
  },
});

const newCart = mongoose.model("cart", Cart);

module.exports = newCart;
