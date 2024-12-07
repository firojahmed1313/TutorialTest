import dotenv from "dotenv";
import express from "express"
import userrouter from "./Router/UserRouter.js";
import postRouter from "./Router/PostRouter.js";
const app = express()
const PORT = process.env.PORT

dotenv.config()

//* Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))



// * Routes
//import routes from "./routes/index.js"

app.use(userrouter)
app.use(postRouter)

app.get("/" ,(req ,res) => {
    return res.send("Working...")
})

app.listen(PORT ,() => console.log(`Server is running on PORT ${PORT}`))