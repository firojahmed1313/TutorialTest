import express from "express";
import { createPaymentIntent, verifyPayment } from "../Controller/paymentController.js";

const paymentRoute = express.Router();


paymentRoute.post("/createPayment",createPaymentIntent);
paymentRoute.post("/verifyPayment",verifyPayment);

export default paymentRoute