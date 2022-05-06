const Product = require("../models/Product");
const Cart = require("../models/cart");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");

const storage = multer.diskStorage({
  designation: function (req, file, cb) {
    cb(null, "./frontend/public/images");
  },

  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

exports.createProduct = async (req, res) => {
  const { productNumber, productName, productCategory, productImage } =
    req.body;

  const productQty = Number(req.body.productQty);

  const productPrice = Number(req.body.productPrice);

  const newProduct = new Product({
    productNumber,
    productName,
    productCategory,
    productPrice,
    productQty,
    productImage,
  });

  await newProduct
    .save()
    .then(() => res.json({ success: true }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

exports.getProduct = async (req, res) => {
  await Product.find()
    .then((product) => res.json(product))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

exports.getProductID = async (req, res) => {
  const { id } = req.params;

  await Product.findById(id)
    .then((products) => res.json(products))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  await Product.findByIdAndDelete(id)
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;

  const {
    productNumber,
    productName,
    productCategory,
    productQty,
    productPrice,
    productImage,
  } = req.body;

  await Product.findByIdAndUpdate(id, {
    productNumber,
    productName,
    productCategory,
    productPrice,
    productQty,
    productImage,
  })
    .then(() => res.json({ message: "Update Successfully" }))
    .catch((error) => res.json({ success: false, error: error }));
};

exports.createCart = async (req, res) => {
  const { productNumber, productName, productCategory, productImage } =
    req.body;

  const productQty = Number(req.body.productQty);

  const productPrice = Number(req.body.productPrice);

  const newCart = new Cart({
    productNumber,
    productName,
    productCategory,
    productPrice,
    productQty,
    productImage,
  });

  await newCart
    .save()
    .then(() => res.json({ success: true }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

exports.getCart = async (req, res) => {
  await Cart.find()
    .then((cart) => res.json(cart))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

exports.deleteCart = async (req, res) => {
  const { id } = req.params;

  await Cart.findByIdAndDelete(id)
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

exports.deleteCartItems = async (req, res) => {

  await Cart.deleteMany({})
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};


