// backend/src/routes/citys.js
import { Router } from "express";
import { citys } from "../mock/citys.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    total: citys.length,
    items: citys,
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const item = citys.find(c => String(c.id) === String(id));
  if (!item) return res.status(404).json({ message: "City not found" });
  res.json(item);
});

export default router;
