import { Router } from "express";
import productRouter from "./ProductRouter.js";
import categoryRouter from "./CategoryRouter.js";
import userRouter from "./userRouter.js";
import cartRouter from "./CartRouter.js";

const router = Router();

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/auth", userRouter);
router.use("", cartRouter);
export default router;
