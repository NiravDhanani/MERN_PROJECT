const Category = require("../model/categorySchema");
const cloudinary = require("cloudinary").v2;

const CreaterCategory = async (req, res) => {
  try {
    const { category } = req.body;
    const image = await cloudinary.uploader.upload(req.file.path);

    const cat = await Category.create({
      category,
      cat_icon: image.secure_url,
      public_Id: image.public_id,
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
    const id = req.query.id
    const del = await Category.findById(id)
    await cloudinary.uploader.destroy(del.public_id)
    await Category.findByIdAndDelete(id)
    return res.status(200).send({
      success : true,
      message : "Category Delete Successfully"
    })
  
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
};
