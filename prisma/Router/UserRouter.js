import {Router} from "express"
import { getUserById, signup } from "../Controller/UserController.js"

const userrouter = Router()

userrouter.post("/register",signup)
userrouter.get("/user/:id",getUserById)

export default userrouter