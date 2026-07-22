import userModel from "../models/user.model.js"

export const getMe = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id).select('-password')

        if (!user) return res.status(404).json({
            success: false,
            message: " user not found"
        })
        return res.status(200).json({
            success: true,
            message: "User found successfully",
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { username, fullName, mobile, dob, bio } = req.body

        const updateData = {}

        if (!username || !fullName || !mobile || !dob || !bio) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const updatedUser = await userModel.findByIdAndUpdate(req.user.id, updateData, {
            new: true
        })

        if (!updatedUser) return res.status(400).json({
            success: false,
            message: "user not found",
        })

        return res.status(200).json({
            success: true,
            message: "User profile updated successfully",
            updateData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const getUserProfile = async (req, res) => {
    try {
        const { username } = req.params

        const user = await userModel.findOne({ username }).select("-password")
        if (!user) return res.status(400).json({
            success: false,
            message: "user not found"
        })

        return res.status(200).json({
            success: true,
            message: "user found successfully",
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })
    }
}



