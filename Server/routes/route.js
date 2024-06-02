const express = require('express')
const route = express.Router()

const RegisterController = require('../controller/RegisterController') 
const CategoryController = require('../controller/CategoryContoller')
const verifyToken = require('../config/auth')

route.post('/register',RegisterController.RegisterData)
route.post('/login',RegisterController.LoginUser)
// verify token rout 
route.get('/Validate-token',verifyToken,CategoryController.HomePage)



module.exports = route 