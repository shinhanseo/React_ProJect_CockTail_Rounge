import { Router } from "express";
import { cocktails } from "../data/cocktails.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ items: cocktails, meta: { total: cocktails.length } });
});

router.get("/:slug", (req, res) => {
  const cocktail = cocktails.find(c => c.slug === req.params.slug);
  if (!cocktail) return res.status(404).json({ message: "Not found" });
  res.json(cocktail);
});

export default router;
