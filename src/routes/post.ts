import { Router } from "express";
import { PostController } from "../controllers/postController";

export const postRouter = Router();

postRouter.get("/posts", PostController.getAllPost);
postRouter.get("/posts/:id", PostController.getPostById);
postRouter.post("/posts", PostController.createPost);
postRouter.put("/posts/:id", PostController.updatePost);
postRouter.delete("/posts/:id", PostController.deletePost);