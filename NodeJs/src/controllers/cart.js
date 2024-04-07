import Cart from "../models/Cart";

export const getCartByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ userId }).populate("products.productId");
    const cartData = {
      products: cart.products.map((item) => ({
        productId: item.productId.id,
        name: item.productId.name,
        image: item.productId.image,
        price: item.productId.price,
        quantity: item.quantity,
      })),
    };
    return res.status(200).json(cartData);
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
export const addItemToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }
    const existProductIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (existProductIndex !== -1) {
      cart.products[existProductIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }
    await cart.save();
    return res.status(200).json({ cart });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
export const increaseProductQuantity = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }
    const product = cart.products.find(
      (item) => item.productId.toString() === productId
    );
    if (!product) {
      return res.status(400).json({
        message: "Product Not Found in cart",
      });
    }
    product.quantity++;
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    return res.status(400).json({
      name: error.name,
      message: error.message,
    });
  }
};
export const decreaseProductQuantity = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(400).json({
        message: "Cart not found",
      });
    }
    const product = cart.products.find(
      (item) => item.productId.toString() === productId
    );
    if (!product) {
      return res.status(400).json({
        message: "Product not found",
      });
    }
    if (product.quantity > 1) {
      product.quantity--;
    }
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(400).json({
        message: "Cart not found",
      });
    }
    cart.products = cart.products.filter(
      (product) =>
        product.productId && product.productId.toString() !== productId
    );
    await cart.save();
    return res.status(200).json({ cart });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
