import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup =  async (req,res) => {
    const { username, email, password} = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === ''){
        return res.status(400).json({
            message: "All field are required"
        })
    }

    const hashPassword = bcryptjs.hashSync(password, 10)
    
    const newUser = new User({
        username,
        email,
        password : hashPassword
    })

    try {
        await newUser.save();
        res.json({message:"Signup successfulll..."})
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        })
    }
}