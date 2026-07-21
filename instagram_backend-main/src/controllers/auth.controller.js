import userModel from "../models/user.model.js"
import { sendFiles } from "../services/storege.service.js"
import { generateToken } from "../utils/token.js"

export const registerController = async (req, res)=>{
    try {
        let {username, fullname, email, mobile, password, bio, dob} = req.body

        let file = req.file

        if(!username || !email || !password || !fullname){
            return res.status(400).json({
                success : false,
                message: "All fields are required"
            })
        }
 
        const uploadFile = await sendFiles(file.buffer, file.originalname)

        const newUser = await userModel.create({
            username,
            fullname,
            email,
            password,
            bio,
            dob,
            mobile,
            profile_pic:uploadFile.url
        })

        const accessToken = generateToken(newUser._id, '15min')
        const refreshToken = generateToken(newUser._id, "1d")

        res.cookie('accessToken', accessToken, {
            httpOnly:true,
            maxAge: 10*60*1000
        })

        return res.status(201).json({
            success:true,
            message: "User Registered",
            data: newUser
        })
    } catch (error) {
        return res.status(500).json({
          success:false,
          message:"internal server error",
          error: error.message
        })
    }
}

export const  loginController = async(req, res)=>{
    try {
        const {email, password} = req.body
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal server Error",
            error: error.message
        })
    }
}