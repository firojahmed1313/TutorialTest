import {Router} from "express"
import { createPost, getPostById } from "../Controller/PostController.js";


const postRouter=Router();

postRouter.post("/createPost",createPost);
postRouter.get("/post/:id",getPostById);

export default postRouter