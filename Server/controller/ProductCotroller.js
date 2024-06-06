const ProductSchema = require("../model/ProductSchema");
const cloudinary = require("cloudinary").v2;

const CreateProduct = async (req, res) => {
  try {
    const {
      product_name,
      product_description,
      product_offer_price,
      product_price,
      product_status,
    } = req.body;

    let image = await cloudinary.uploader.upload(req.file.path);

    const product = await ProductSchema.create({
      categoryId: req.body.categoryId,
      product_name,
      product_description,
      product_offer_price,
      product_price,
      product_status,
      product_image: image.secure_url,
      product_public_id: image.public_id,
    });

    return res.status(200).send({
      success: true,
      message: "Product Created",
      product,
    });
  } catch (err) {
    return res.status(503).send({
      success: false,
      message: err.message,
    });
  }
};

const ViewProduct = async (req, res) => {
  try {
    let data = await ProductSchema.find({}).populate("categoryId");
    return res.status(200).send({
      success: true,
      message: "Product successfully fatch",
      data,
    });
  } catch (err) {
    return res.status(503).send({
      success: false,
      message: err.message,
    });
  }
};

const DeleteProduct = async (req, res) => {
  try {
    let id = req.query.id;
    let data = await ProductSchema.findById(id);
    await cloudinary.uploader.destroy(data.product_public_id)
    await ProductSchema.findByIdAndDelete(id)
    return res.status(200).send({
        success : true,
        message : "Category Delete successfully",
        data : data
    })
  } catch (err) {
    return res.status(503).send({
      success: false,
      message: err.message,
    });
  }
};
module.exports = {
  CreateProduct,
  ViewProduct,
  DeleteProduct,
};
