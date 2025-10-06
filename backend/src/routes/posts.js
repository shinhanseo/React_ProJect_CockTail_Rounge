// backend/src/routes/posts.js
import { Router } from "express";
import { posts } from "../data/posts.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ items: posts, meta: { total: posts.length } });
});

router.get("/:id", (req, res) => {
  const post = posts.find(p => p.id === Number(req.params.id));
  if (!post) return res.status(404).json({ message: "Not found" });
  res.json(post);
});

export default router;
