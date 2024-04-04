import { Router } from "express";
import {
  addNewProduct,
  getAllProducts,
  getProductById,
  related,
  removeProduct,
  updateProduct,
} from "../controllers/product.js";

const productRouter = Router();

productRouter.get("", getAllProducts);
productRouter.get("/:category/related/:id", related);
productRouter.post("", addNewProduct);
productRouter.get("/:id", getProductById);
productRouter.delete("/:id", removeProduct);
productRouter.put("/:id", updateProduct);

export default productRouter;
