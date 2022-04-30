const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const { productNumber, productName, productCategory } = req.body;

  const productQty = Number(req.body.productQty);

  const newProduct = new Product({
    productNumber,
    productName,
    productCategory,
    productQty,
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

  const { productNumber, productName, productCategory, productQty } = req.body;

  await Product.findByIdAndUpdate(id, {
    productNumber,
    productName,
    productCategory,
    productQty,
  })
    .then(() => res.json({ message: "Update Successfully" }))
    .catch((error) => res.json({ success: false, error: error }));
};
