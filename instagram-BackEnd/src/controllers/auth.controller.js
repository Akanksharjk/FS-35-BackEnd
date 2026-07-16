const registerController = async (req, res)=>{
    try {
        let {username, fullname, email, mobile, password, bio, dob} = req.body
        let file = req.file

        if(!username || !email || !fullname || !password ){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
     
        const uploadFile = await sendFiles()

    } catch (error) {
        
    }
}