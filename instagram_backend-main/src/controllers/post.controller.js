import Postmodel from "../models/post.model.js"
import { sendFiles } from "../services/storege.service.js"

export const createPostController = async (req, res)=>{
    try {
        let {caption, location} = req.body

        let files = req.files

        if(!files)
            return res.status(400).json({
            success:false,
            message: "Media is required"
    })

    let uploadedImage = await Promise.all(
        files.map(async (elem)=>{
            return await sendFiles(elem.buffer, elem.originalname)
        })
    )

    let newPost = await Postmodel.create({
        caption,
        location,
        media_urls: uploadedImage.map((elem) => elem.url)
    })

    return res.status(201).json({
        success:true,
        message:"Post created successfully",
        data: newPost
    })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error
        })
    }
}