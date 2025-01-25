import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup =  async (req,res, next) => {
    const { username, email, password} = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === ''){
        // return res.status(400).json({
        //     message: "All field are required"
        // })

        next(errorHandler(400,"All Field Are required.."));
    }

    const hashPassword = bcryptjs.hashSync(password, 10);
    
    const newUser = new User({
        username,
        email,
        password : hashPassword
    })

    try {
        await newUser.save();
        res.json({message:"Signup successfulll..."});
    } catch (error) {
        next(error);
    }
}

