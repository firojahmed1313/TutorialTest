import prisma from "../DBConfig/DBConfig.js";

export const signup = async (req,res)=>{
    const {name,email,password}=req.body;
    //console.log(name,email,password);
   
    try {
        const user = await prisma.user.create({
            data:{
                name,email,password
            }
        })
        //console.log(user);
        return res.json({
            status:201,
            message:"User Add Sucessfully",
            user
        })
    } catch (error) {
        //console.log(error);
        return res.json({
            status:404,
            message:error.message
            
        })
    }
    
    

}

export const getUserById =async(req,res)=>{
    const {id} = req.params;
    //console.log(id);
    try {
        const user = await prisma.user.findUnique({
            where:{
                id:id
            },
            include: { Post: true },
        })
        //console.log(user);
        return res.json({
            status:200,
            user
        })
    } catch (error) {
        return res.json({
            status:404,
            message:error.message
        })
    }
}