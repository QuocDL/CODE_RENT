import Category from "../models/Category.js";
import Product from "../models/Product.js";
export const getAllProducts = async (req, res) => {
  const {
    _page = 1,
    _limit = 5,
    _sort = "createAt",
    _order = "asc",
    _expand,
  } = req.query;
  const option = {
    page: _page,
    limit: _limit,
  };
  const populateOptions = _expand ? [{ path: "category", select: "name" }] : [];
  try {
    const result = await Product.paginate(
      { categoryId: null },
      {
        ...option,
        populate: populateOptions,
      }
    );
    if (result.docs.length == 0) {
      return res.status(400).json({
        message: "Not product to get all!",
      });
    }
    const response = {
      data: result.docs,
      pagination: {
        currentPage: result.page,
        totalPages: result.totalPages,
        totalItem: result.totalDocs,
      },
    };
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Error",
      message: error.message || "Server Error!",
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const data = await Product.findById(req.params.id).populate("category");
    if (!data) {
      return res.status(400).json({
        message: "Product not found!",
      });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(400).json({
        message: "Not found product to delete!",
      });
    }
    // Xoa san pham trong category
    const updateCate = await Category.updateOne(
      { _id: data.category },
      { $pull: { products: req.params.id } },
      { new: true }
    );
    if (!updateCate) {
      return res.status(404).json({
        message: "Xoa san phan khoi danh muc that bat",
      });
    }
    return res.status(200).json({
      message: "Delete complete!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const addNewProduct = async (req, res) => {
  try {
    const body = req.body;
    const data = await Product.create(body);
    if (!data) {
      return res.status(400).json({
        message: "Create Product Failed!",
      });
    }
    const upadetCategory = await Category.findByIdAndUpdate(
      data.category,
      {
        $push: {
          products: data._id,
        },
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      message: "Create Complete",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name || "Error",
      message: error.message || "Server Error!",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    const oldCategory = data.category;
    if (!data) {
      return res.satus(400).json({
        message: "Not found product to update!",
      });
    }
    if (oldCategory !== data.category) {
      await Category.updateOne(
        { _id: oldCategory },
        { $pull: { products: req.params.id } },
        { new: true }
      );
      await Category.updateOne(
        { _id: data.category },
        { $addToSet: { products: req.params.id } },
        { new: true }
      );
    }
    return res.status(200).json({
      message: "UPDATE COMPLETE!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};

export const related = async (req, res) => {
  try {
    const product = await Product.find({
      category: req.params.category,
      _id: { $ne: req.params.id },
    });
    return res.status(200).json(product);
  } catch (error) {}
};
