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

export const searchUser = async (req, res) => {
    try {
        const { query } = req.query

        if (!query) return res.status(400).json({
            success: false,
            message: "search query required"
        })

        const user = await userModel.find({
            $or: [
                { username: { "$regex": query, "$options": "i" } },
                { fullname: { "$regex": query, "$options": "i" } }
            ].select("username fullname profile_pic")
        })

        if (user.length == 0) return res.status(404).json({
            success: false,
            message: "user not found"
        })

        return res.status(200).json({
            success: true,
            message: "user fetched successfully",
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

export const followUser = async (req, res) => {
    try {
        const targetUserId = req.params.id

        if (targetUserId === req.user.id) return res.status(400).json({
            success: false,
            message: "you can follow yourself"
        })

        const loggedInUser = await userModel.findById(req.user.id)
        const targetUser = await userModel.findById(targetUserId)

        if (!targetUser) return res.status(404).json({
            success: false,
            message: "user not found"
        })

        const alreadyExit = loggedInUser.followings.includes(targetUserId)

        if (alreadyExit) return res.status(400).json({
            success: false,
            message: "you alredy follow this user "
        })

        loggedInUser.followings.push(targetUserId)
        targetUser.followers.push(req.user.id)

        await loggedInUser.save()
        await targetUser.save()

        return res.status(200).json({
            success: true,
            message: "user followed successfully",
            targetUser,
            loggedInUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })
    }
}

export const followingUser = async (req, res) => {
    try {
        const targetUserId = req.params.id

        if (targetUserId === req.user.id) return res.status(400).json({
            success: false,
            message: "you can follow yourself"
        })

        const loggedInUser = await userModel.findById(req.user.id)
        const targetUser = await userModel.findById(targetUserId)

        if (!targetUser) return res.status(404).json({
            success: false,
            message: "user not found"
        })

        const alreadyExit = loggedInUser.followers.includes(targetUserId)

        if (alreadyExit) return res.status(400).json({
            success: false,
            message: "you alredy follow this user "
        })

        loggedInUser.followings.push(targetUserId)
        targetUser.followers.push(req.user.id)

        await loggedInUser.save()
        await targetUser.save()

        return res.status(200).json({
            success: true,
            message: "user followed successfully",
            targetUser,
            loggedInUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })
    }
}

export const unfollowUser = async (req, res) => {
    try {
        const targetUserId = req.params.id

        if (req.user.id === targetUserId) return res.status(400).json({
            success: false,
            message: "you cannot unfollow yourself"
        })

        const loggedInUser = await userModel.findById(req.user.id)
        const targetUser = await userModel.findById(targetUserId)

        if (!targetUser) return res.status(404).json({
            success: false,
            message: "user not found"
        })
        const alreadyExit = loggedInUser.followings.includes(targetUserId)

        if (!alreadyExit) return res.status(400).json({
            success: false,
            message: "you did not follow this user"
        })

        loggedInUser.followings.pull(targetUserId)
        targetUser.followers.pull(req.user.id)

        loggedInUser.save()
        targetUser.save()

        return res.status(200).json({
            success: true,
            message: "user unfollow successfully",
            loggedInUser,
            targetUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })
    }
}
