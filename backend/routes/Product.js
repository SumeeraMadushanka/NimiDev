const router = require("express").Router();

const {
  createProduct,
  getProduct,
  getProductID,
  deleteProduct,
  updateProduct,
  createCart,
  getCart,
  deleteCart,
  deleteCartItems,
} = require("../controllers/Product");

router.route("/createProduct").post(createProduct);

router.route("/getProduct").get(getProduct);

router.route("/getProductID/:id").get(getProductID);

router.route("/deleteProduct/:id").delete(deleteProduct);

router.route("/updateProduct/:id").put(updateProduct);

router.route("/createCart").post(createCart);
router.route("/getCart").get(getCart);
router.route("/deleteCart/:id").delete(deleteCart);
router.route("/delete").delete(deleteCartItems);

module.exports = router;
