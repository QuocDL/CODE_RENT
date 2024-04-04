import { Router } from "express";
import productRouter from "./ProductRouter.js";
import categoryRouter from "./CategoryRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/auth", userRouter);
export default router;
