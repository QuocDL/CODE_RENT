import { Router } from "express";
import {
  createCategory,
  getAllCategory,
  getCategoryId,
  removeCategory,
  updateCategory,
} from "../controllers/category";

const categoryRouter = Router();

categoryRouter.post("", createCategory);
categoryRouter.get("", getAllCategory);
categoryRouter.get("/:id", getCategoryId);
categoryRouter.delete("/:id", removeCategory);
categoryRouter.put("/:id", updateCategory);

export default categoryRouter;
