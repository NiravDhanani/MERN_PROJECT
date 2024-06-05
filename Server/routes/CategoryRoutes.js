const express = require("express");
const route = express.Router();
const multer = require("multer");


const upload = multer({storage : multer.diskStorage({})}).single("cat_icon")
const category = require('../controller/CategoryController')

route.post('/createcategory',upload,category.CreaterCategory)
route.get('/viewcategory',category.viewCategory)
route.get('/deleteCategory',category.deleteCategory)

module.exports = route; 