import express from "express"
import cors from "cors"
import paymentRoute from "./Routes/PaymentRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "https://5173-firojahmed1-tutorialtes-y9rjtz4svr1.ws-us116.gitpod.io",
    credentials: true
}))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/", (req, res) => {
    res.send("hello world");
})
app.use("/api/payment", paymentRoute);

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})