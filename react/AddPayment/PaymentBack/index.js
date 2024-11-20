import express from "express"
import cors from "cors"
import paymentRoute from "./Routes/PaymentRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.get("/", (req, res) => {
    res.send("hello world");
})
app.use("/api/payment", paymentRoute);

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})