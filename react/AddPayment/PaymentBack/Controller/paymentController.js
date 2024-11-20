import createRazorpayInstance from "../Config/razorpayConfig.js";
import dotenv from "dotenv"
import crypto from "crypto"

dotenv.config();

const razorpayInstance = createRazorpayInstance();
export const createPaymentIntent=async(req,res)=>{
    const {id,amount}=req.body;
    //console.log(id,amount);
    if(!id || !amount){
        res.json({
            success:false,
            message:"Please provide id and amount"
        });
    }
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
    //if(!razorpay_payment_id && !razorpay_order_id &&!razorpay_signature){
        console.log(razorpay_payment_id,razorpay_order_id,razorpay_signature);
    //}
    const secret=process.env.RAZORPAY_KEY_SECRET;
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const generated_signature=hmac.digest('hex');
    //const generated_signature = hmac_sha256(razorpay_order_id + "|" + razorpay_payment_id, secret);
    console.log(generated_signature);
    console.log("result",generated_signature===razorpay_signature);
    if(generated_signature===razorpay_signature){
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