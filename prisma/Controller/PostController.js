import prisma from "../DBConfig/DBConfig.js";

export const createPost= async(req,res)=>{
    const {title,img_Url,body,authorId} = req.body;
    console.log(title,img_Url,body,authorId);
    
    try {
        const post = await prisma.post.create({
            data:{
                title,
                img_Url,
                body,
                authorId
            }
        })
        res.json({
            "message":"Post added Sucessfully",
            post
        })
    } catch (error) {
        res.json({"message":error.message})
    }

}
export const getPostById =async(req,res)=>{
    const {id} = req.params;
    //console.log(id);
    try {
        const post = await prisma.post.findUnique({
            where:{
                id:id
            },
            include: { author: true },
        })
        //console.log(user);
        return res.json({
            status:200,
            post
        })
    } catch (error) {
        return res.json({
            status:404,
            message:error.message
        })
    }
}