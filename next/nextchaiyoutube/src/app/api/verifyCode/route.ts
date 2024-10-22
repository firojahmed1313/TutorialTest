import dbConnect from "@/lib/config/db";
import UserModel from "@/lib/model/User";


export async function POST(req: Request, res: Response){
    await dbConnect();
    try {
        const {userName,code} = await req.json();
        const decodedUserName= decodeURIComponent(userName);
        const existingUser=await UserModel.findOne({userName:decodedUserName});
        if(!existingUser){
            return Response.json(
                {
                    success: false,
                    message: "No User Found"
                },
                {
                    status: 400,
                }
            )
        }
        const isCodeValid = existingUser.verifyCode==code;
        const isCodeNotExpired=new Date(existingUser.verifyCodeExpiry)>new Date();
        if(isCodeValid && isCodeNotExpired){
            existingUser.isVerified=true;
            await existingUser.save();
            return Response.json(
                {
                    success: true,
                    message: "Email Verified"
                },
                {
                    status: 200,
                }
            )
        }else if (isCodeNotExpired){
            return Response.json(
                {
                    success: false,
                    message: "Code Expired plz sign In again"
                },
                {
                    status: 400,
                }
            )
        }
        else{
            return Response.json(
                {
                    success: false,
                    message: "Invalid Code"
                },
                {
                    status: 400,
                }
            )
        }
    } catch (error) {
        console.warn(error);
        return Response.json(
            {
                success: false,
                message: "Failed to send Verification email "
            },
            {
                status: 500,
            }
        )
    }
}