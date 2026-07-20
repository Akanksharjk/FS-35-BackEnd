import userModel from "../models/user.model"
import { sendFiles } from "../services/storege.service.js"

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

    } catch (error) {
        
    }
}