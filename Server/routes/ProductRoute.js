const express = require("express");
const route = express.Router();
const multer = require("multer");

const uploadProduct = multer({
  storage: multer.diskStorage({}),
}).single("product_image");

const ProductController = require("../controller/ProductCotroller");

route.post("/createProduct", uploadProduct, ProductController.CreateProduct);
route.get("/ViewProduct", ProductController.ViewProduct);
route.delete("/DeleteProduct", ProductController.DeleteProduct);
route.put("/UpdateProduct",uploadProduct,ProductController.UpdateProduct);

module.exports = route;
