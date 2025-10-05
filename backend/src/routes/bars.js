import { Router } from "express";
import { bars } from "../mock/bars.js";

const router = Router();

router.get("/", (req, res) => {
  const { city, q, page = "1", size = "50" } = req.query;

  let data = bars;

  if (city) {
    const key = String(city).toLowerCase();
    data = data.filter(b => String(b.city || "").toLowerCase().includes(key));
  }

  if (q) {
    const k = String(q).toLowerCase();
    data = data.filter(b =>
      (b.name || "").toLowerCase().includes(k) ||
      (b.address || "").toLowerCase().includes(k) ||
      (b.desc || "").toLowerCase().includes(k)
    );
  }

  const p = Math.max(parseInt(page, 10) || 1, 1);
  const s = Math.max(parseInt(size, 10) || 50, 1);
  const start = (p - 1) * s;

  res.json({
    total: data.length,
    page: p,
    size: s,
    items: data.slice(start, start + s),
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const item = bars.find(b => String(b.id) === String(id));
  if (!item) return res.status(404).json({ message: "Bar not found" });
  res.json(item);
});

export default router;
