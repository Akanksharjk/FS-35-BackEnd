import dotenv from 'dotenv'
dotenv.config()

import ImageKit from 'imagekit'

const storageInstance = new ImageKit({
    publicKey : process.env.IK_PUB_KEY,
    privateKey:process.env.IK_PRI_KEY,
    urlEndpoint: process.env.IK_URL
})

export const sendFiles = async (file, fileName)=>{
    let obj = {
        file,
        filename,
        folder:"instagram-backend-main"
    }

    return await storageInstance.upload(obj)
}