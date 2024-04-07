import Category from "../models/Category";
import Product from "../models/Product";

export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const getAllCategory = async (req, res) => {
  try {
    const category = await Category.find();
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const cateogry = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(cateogry);
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
export const getCategoryId = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate(
      "products"
    );
    return res.status(200).json({
      category,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const removeCategory = async (req, res) => {
  try {
    await Product.deleteMany({ category: req.params.id });
    const category = await Category.findByIdAndDelete(req.params.id);
    console.log(category);

    return res.status(200).json({
      message: "DELETE COMPLETE!",
      category,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
