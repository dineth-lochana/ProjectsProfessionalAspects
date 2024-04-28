import express from "express";
import { getPosts, addPost, deletePost, posts} from "../controllers/post.js";

const router = express.Router();

router.get("/posts" , posts)
router.get("/", getPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);


export default router;
