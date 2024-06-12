const express = require("express");
const route = express.Router();
const multer = require("multer");

const uploadProduct = multer({
  storage: multer.diskStorage({}),
}).single("product_image");

const verifyToken = require(`../config/auth`)
const ProductController = require("../controller/ProductCotroller");

route.post("/createProduct",verifyToken,uploadProduct,ProductController.CreateProduct);
route.get("/ViewProduct",verifyToken,ProductController.ViewProduct);
route.delete("/DeleteProduct",verifyToken,ProductController.DeleteProduct);
route.put("/UpdateProduct",verifyToken,uploadProduct,ProductController.UpdateProduct);

module.exports = route;
