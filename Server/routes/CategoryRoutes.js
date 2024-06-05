const express = require("express");
const route = express.Router();
const multer = require("multer");


const upload = multer({storage : multer.diskStorage({})}).single("cat_icon")
const category = require('../controller/CategoryController')

route.post('/createcategory',upload,category.CreaterCategory)
route.get('/viewcategory',category.viewCategory)
route.delete('/deleteCategory',category.deleteCategory)
route.get('/editCategory',category.editCategory)
route.put('/updateCategory',upload,category.updateCategory)

module.exports = route; 