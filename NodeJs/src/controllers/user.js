import dotenv from "dotenv";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
dotenv.config();
const { SECRECT_CODE } = process.env;

export const register = async (req, res) => {
  try {
    const { userName, email, password, role } = req.body;
    const checkName = await User.findOne({ userName });
    const checkEmail = await User.findOne({ email });
    if (checkName) {
      return res.status(400).json({
        message: "Tên người dùng đã tồn tại!",
      });
    }
    if (checkEmail) {
      return res.status(400).json({
        message: "Email đã tồn tại!",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    if (!hashPassword) {
      return res.status(400).json({
        message: "Hashpassword failed!",
      });
    }

    const user = await User.create({
      userName,
      email,
      password: hashPassword,
      role,
    });
    user.password = undefined;
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: "LOI ROI CHECK CODE DI",
    });
  }
};

export const loginApi = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.status(400).json({
        message: "Tài khoản không tồn tại",
      });
    }
    const checkPassword = await bcrypt.compare(password, checkUser.password);
    if (!checkPassword) {
      return res.status(400).json({
        message: "Sai mật khẩu",
      });
    }
    const accessToken = jwt.sign(
      {
        id: checkUser._id,
      },
      SECRECT_CODE,
      {
        expiresIn: "10d",
      }
    );

    return res.status(200).json({
      token: accessToken,
      user: checkUser,
    });
  } catch (error) {
    return res.status(500).json({
      name: error.name,
      message: error.message,
    });
  }
};
