import { Router } from "express";
import {
  addItemToCart,
  decreaseProductQuantity,
  getCartByUser,
  increaseProductQuantity,
  removeFromCart,
} from "../controllers/cart";

const cartRouter = Router();

cartRouter.get("/carts/:userId", getCartByUser);
cartRouter.post("/carts/addtocart", addItemToCart);
cartRouter.post("/carts/remove", removeFromCart);
cartRouter.post("/carts/remove", removeFromCart);
cartRouter.post("/carts/increase", increaseProductQuantity);
cartRouter.post("/carts/decrease", decreaseProductQuantity);
export default cartRouter;
