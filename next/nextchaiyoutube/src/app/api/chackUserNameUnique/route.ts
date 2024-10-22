import dbConnect from "@/lib/config/db";
import UserModel from "@/lib/model/User";
import { usenamevalidation } from "@/lib/schema/signUpSchema";
import { z } from "zod";

const userNamevalidationSchema= z.object({
    userName:usenamevalidation
})

export async function GET(req: Request, res: Response){
    await dbConnect();
    try {
        const {searchParams}= new URL(req.url);
        const quaryParams= {userName: searchParams.get('userName')}
        const result= userNamevalidationSchema.safeParse(quaryParams);
        if(!result.success){
            const userNameErrorMessage= result.error.format().userName?._errors||[];
            return Response.json(
                {
                    success:false,
                    message:userNameErrorMessage
                },
                {
                    status:400
                }
            )
        }
        const userName = result.data;
        const existingUserName = await UserModel.findOne({userName:userName,isVerified:true});
        if(existingUserName){
            return Response.json(
                {
                    success:false,
                    message:"username already exists"
                },
                {
                    status:400
                }
            )
        }
        return Response.json(
            {
                success:true,
                message:"username is available"
            },
            {
                status:200
            }
        )
        
    } catch (error) {
        console.warn(error);
        return Response.json(
            {
                success:false,
                message:"error chacking username"
            },
            {
                status:500
            }
        )
    }
}