import userModel from "../models/user.model.js"
import { sendFiles } from "../services/storege.service.js"
import { generateToken } from "../utils/token.js"

export const registerController = async (req, res) => {
    try {
        let { username, fullname, email, mobile, password, bio, dob } = req.body

        let file = req.file

        if (!username || !email || !password || !fullname) {
            return res.status(400).json({
                success: false,
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
            profile_pic: uploadFile.url
        })

        const accessToken = generateToken(newUser._id, '15m')
        const refreshToken = generateToken(newUser._id, "1d")

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            maxAge: 10 * 60 * 1000
        })

        return res.status(201).json({
            success: true,
            message: "User Registered",
            data: newUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })
    }
}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are reqired"
            })
        }
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        const isPasswordCorrect = await user.comparePass(password)

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const accessToken = generateToken(user._id, "15m")
        const refreshToken = generateToken(user._id, '1d')

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
            secure: false,
            sameSite: "strict"
        })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: false,
            sameSite: "strict"
        })

        const userData = user.toObject()
        delete userData.password

        return res.status(200).json({
            success: true,
            message: "Login Successfully",
            data: userData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server Error",
            error: error.message
        })
    }
}