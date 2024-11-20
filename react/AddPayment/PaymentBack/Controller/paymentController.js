import createRazorpayInstance from "../Config/razorpayConfig.js";
import dotenv from "dotenv"
import crypto from "crypto"

dotenv.config();

const razorpayInstance = createRazorpayInstance();
export const createPaymentIntent=async(req,res)=>{
    const {id,amount}=req.body;
    const options={
        amount:amount*100,
        currency:'INR',
        receipt:id
    }
    try {
        razorpayInstance.orders.create(options,(error,order)=>{
            if(error){
                res.json({
                    success:false,
                    message:error
                });
            }else{
                res.json({
                    success:true,
                    data:order
                });
            }
        })
    } catch (error) {
        res.json({
            success:false,
            message:error
        });
    }
    
}

export const verifyPayment=async(req,res)=>{
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=req.body;
    const secret=process.env.RAZORPAY_KEY_SECRET;
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const result=hmac.digest('hex');
    if(result===razorpay_signature){
        res.json({
            success:true,
            message:"Payment Successful"
        })
    }else{
        res.json({
            success:false,
            message:"Payment Failed"
        })
    }
}