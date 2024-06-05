const Category = require("../model/categorySchema");
const cloudinary = require("cloudinary").v2;

const CreaterCategory = async (req, res) => {
  try {
    const { category } = req.body;
    const image = await cloudinary.uploader.upload(req.file.path);

    const cat = await Category.create({
      category,
      cat_icon: image.secure_url,
      public_id: image.public_id,
    });

    return res.status(200).send({
      success: true,
      message: "Category Created",
      cat
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
    if(!id){
      return res.status(400).send({
        success : false,
        message : "id not get"
      })
    }
    const del = await Category.findById(id)
    if(!del){
      return res.status(400).send({
        success : false,
        message : "data not Found"
      })
    }
    let cloud =  await cloudinary.uploader.destroy(del.public_id)
    await Category.findByIdAndDelete(id)
    return res.status(200).send({
      success : true,
      message : "Category Delete Successfully",
    })
  
  } catch (err) {
    return res.status(503).send({
      success: false,
      message: err.message,
    });
  }
};


// const deleteCategory = async (req, res) => {
//   try {
//     const { id } = req.query;
//     if (!id) {
//       return res.status(400).send({
//         success: false,
//         message: "Missing required parameter - id",
//       });
//     }

//     const categoryToDelete = await Category.findById(id);
//     if (!categoryToDelete) {
//       return res.status(404).send({
//         success: false,
//         message: "Category not found",
//       });
//     }

//     await cloudinary.uploader.destroy(categoryToDelete.public_Id);
//     await Category.findByIdAndDelete(id);

//     return res.status(200).send({
//       success: true,
//       message: "Category deleted successfully",
//     });
//   } catch (err) {
//     return res.status(503).send({
//       success: false,
//       message: err.message,
//     });
//   }
// };

module.exports = {
  CreaterCategory,
  viewCategory,
  deleteCategory,
};
