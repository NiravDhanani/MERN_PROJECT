const Category = require("../model/categorySchema");
const cloudinary = require("cloudinary").v2;

const CreaterCategory = async (req, res) => {
  try {
    const { category } = req.body;

    const cat = await Category.create({
      category,
    });

    return res.status(200).send({
      success: true,
      message: "Category Created",
      cat,
    });
  } catch (err) {
    return res.status(503).send({
      success: false,
      message: err.message,
    });
  }
};

const viewCategory = async (req, res) => {
  try {
    let data = await Category.find({});

    return res.status(200).send({
      success: true,
      message: "Category fetch",
      data,
    });
  } catch (err) {
    return res.status(503).send({
      success: false,
      message: err.message,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.query.id;
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "id not get",
      });
    }
    await Category.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "Category Delete Successfully",
    });
  } catch (err) {
    return res.status(503).send({
      success: false,
      message: err.message,
    });
  }
};

const editCategory = async (req, res) => {
  try {
    let id = req.query.id;
    let single = await Category.findById(id);
    return res.status(200).send({
      success: true,
      message: "Category ready to edit",
      single,
    });
  } catch (err) {
    return res.status(503).send({
      success: false,
      message: " category id not found",
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    let id = req.query.id;
    let single = await Category.findById(id);

    let data = await Category.findByIdAndUpdate(id, {
      category: req.body.category,
    });
    return res.status(200).send({
      success: true,
      message: "category successfully update",
      data : req.body.category,
    });
  } catch (err) {
    return res.status(503).send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  CreaterCategory,
  viewCategory,
  deleteCategory,
  editCategory,
  updateCategory,
};
