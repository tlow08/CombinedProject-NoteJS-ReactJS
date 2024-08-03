import User from "../models/UserModel.js";
import { generateToken } from "../utils/jwt.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import jwt from "jsonwebtoken";
export const register = async (req, res, next) => {
  /*
    1 kiem tra email co duoc dang ky trong he thong chua
    2 Ma hoa password
    2 khoi tao user moi
    4 thong bao thanh cong
    */
  try {
    const { email, password } = req.body;
    const useExists = await User.findOne({ email });
    if (useExists) {
      return res.status(400).json({
        message: "Email da ton tai",
      });
    }

    const hashPass = hashPassword(password);
    if (!hashPass) {
      return res.status(400).json({
        message: "ma hoa mat khau khong thanh cong",
      });
    }

    const user = await User.create({
      email,
      password: hashPass,
    });

    user.password = undefined;
    return res.status(201).json({
      success: true,
      user,
      message: "dang ky thanh cong",
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  /*
    1 kiem tra email co duoc dang ky trong he thong chua
    2 gia ma password
    3 generate token
    4 thong bao thanh cong
    */
  try {
    const { email, password } = req.body;
    const useExists = await User.findOne({ email });
    if (!useExists) {
      return res.status(404).json({
        message: "Email da chua dang ky",
      });
    }

    const isMatch = comparePassword(password, useExists.password);
    if (!isMatch) {
      return res.status(400).json({
        message: " mat khau khong dung",
      });
    }

    const token = generateToken({_id: useExists._id},  "100d"); 
    useExists.password = undefined;

    return res.status(200).json({
        success: true,
        user: useExists,
        accessToken: token,
        message: "Login successfully"
    })

  } catch (error) {
    next(error);
  }
};
