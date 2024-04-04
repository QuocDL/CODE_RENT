import { Router } from "express";
import {
  createCategory,
  getAllCategory,
  getCategoryId,
  removeCategory,
} from "../controllers/category";

const categoryRouter = Router();

categoryRouter.post("", createCategory);
categoryRouter.get("", getAllCategory);
categoryRouter.get("/:id", getCategoryId);
categoryRouter.delete("/:id", removeCategory);

export default categoryRouter;
