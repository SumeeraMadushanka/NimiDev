const router = require("express").Router();

const {
  createProduct,
  getProduct,
  getProductID,
  deleteProduct,
  updateProduct,
} = require("../controllers/Product");

router.route("/createProduct").post(createProduct);

router.route("/getProduct").get(getProduct);

router.route("/getProductID/:id").get(getProductID);

router.route("/deleteProduct/:id").delete(deleteProduct);

router.route("/updateProduct/:id").put(updateProduct);

module.exports = router;
