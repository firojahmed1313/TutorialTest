import dbConnect from "@/lib/config/db";
import { sendVerificationEmail } from "@/helper/sendEmail";
import UserModel from "@/lib/model/User";

export async function POST(req: Request, res: Response){
    await dbConnect();
    try {
        var verifyCode=Math.floor((Math.random() + 100000)*900000).toString();
        const {userName,email,password}=await req.json();
        const userByuserName = await UserModel.findOne({userName,isVerified:true});
        if (userByuserName){
            return Response.json(
                {
                    success: false,
                    message: "UserNmae already exists"
                },
                {
                    status: 400,
                }
            )
        }
        const userByEmail=await UserModel.findOne({email});
        if (userByEmail){
            if(userByEmail.isVerified){
                return Response.json(
                    {
                        success: false,
                        message: "Email already exists"
                    },
                    {
                        status: 400,
                    }
                )
            }else{
                userByEmail.password = password;
                userByEmail.verifyCode=verifyCode;
                userByEmail.verifyCodeExpiry = new Date(Date.now() + 60*60 * 1000);
                await userByEmail.save();
            }
            
        }else{
            
            const addData=new UserModel({
                userName,
                email,
                password,
                verifyCode,
                isVerified: false,
                verifyCodeExpiry: new Date(Date.now() + 60*60 * 1000),
                isAcceptingMessage: true,
                massages: []
            })
            await addData.save();
        }
        const emailResponse = await sendVerificationEmail(email,userName,verifyCode);
        if(!emailResponse.success) {
            return Response.json(
                {
                    success: false,
                    message: emailResponse.message
                },
                {
                    status: 500,
                }
            )
        }
        return Response.json({
            success: true,
            message: "Verification email sent successfully. plz verify Email."
        },{
            status: 201,
        })
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

