const express = require("express");
const route = express.Router();
const multer = require("multer");

const verifyToken = require('../config/auth')
const category = require('../controller/CategoryController')

route.post('/createcategory',verifyToken,category.CreaterCategory)
route.get('/viewcategory',verifyToken,category.viewCategory)
route.delete('/deleteCategory',verifyToken,category.deleteCategory)
route.get('/editCategory',verifyToken,category.editCategory)
route.put('/updateCategory',verifyToken,category.updateCategory)

module.exports = route; 