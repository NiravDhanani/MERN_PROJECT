const RegisterSchema = require("../model/RegisterSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const user = require("../model/RegisterSchema");

const RegisterData = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let hashPassword = await bcrypt.hash(password, 10);
    const user = await RegisterSchema.create({
      name,
      email,
      password: hashPassword,
      role: "customer",
    });
    console.log(user);
    return res.status(201).send({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await RegisterSchema.findOne({ email: email });

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Email not match",
      });
    }
    let match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).send({
        success: false,
        message: "Invalid password",
      });
    }

    const token = await jwt.sign({ payload: user }, "ABC", {
      expiresIn: "1hr",
    });
    return res.status(200).send({
      success: true,
      message: "user Login",
      token,
      user,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const ValidateToken = (req, res) => {
  try {
    return res.send({
      success: true,
      message: "Token is valid",
      data: req.user,   
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: new err.message(),
    });
  }
};

module.exports = {
  RegisterData,
  LoginUser,
  ValidateToken,
};