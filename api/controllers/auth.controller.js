import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return next(errorHandler(400, "All fields are required."));
    }

    // Hash password securely
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save user
    await newUser.save();

    res.status(201).json({ success: true, message: "Signup successful" });

  } catch (error) {
    next(error);
  }
};

export const signin = async (req,res,next) => {
  const {email, password} = req.body;

  if(!email || !password || email === '' || password === ''){
    next(errorHandler(400,'All fields are required..'));
  }

  try {
    const ValidUser = await User.findOne({email});
    if(!ValidUser){
      return next(errorHandler(400,'User not found'));
    }
    const validPassword = bcryptjs.compareSync(password,ValidUser.password);
    if(!validPassword){
      return next(errorHandler(400,'invalid password'));
    }
    const token = jwt.sign({id:ValidUser._id,}, process.env.JWT_SECRET);

    const {password: pass, ...rest} = ValidUser._doc; // destructuring assignment to exclude the password field from the user object before sending the response

    res.status(200).cookie('access_token', token, {
      httpOnly: true
    }).json(rest);
  } catch (error) {
    next(error);
  }

}
