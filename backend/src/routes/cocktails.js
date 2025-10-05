import { Router } from "express";
import { cocktails } from "../mock/cocktails.js";

const router = Router();

/**
 * GET /api/cocktails
 * 예: /api/cocktails?page=1&size=20&tags=진,탄산&q=토닉
 */
router.get("/", (req, res) => {
  const { page = "1", size = "50", tags, q } = req.query;

  let data = cocktails;

  // 태그 ANY 매칭 (하나라도 포함). 모두 포함하려면 every로 바꿔도 됨.
  const tagArr = typeof tags === "string"
    ? tags.split(",").map(s => s.trim()).filter(Boolean)
    : null;

  if (tagArr?.length) {
    data = data.filter(c => (c.tags || []).some(t => tagArr.includes(t)));
  }

  if (q) {
    const k = String(q).toLowerCase();
    data = data.filter(c =>
      (c.name || "").toLowerCase().includes(k) ||
      (c.comment || "").toLowerCase().includes(k) ||
      (c.slug || "").toLowerCase().includes(k)
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

/**
 * GET /api/cocktails/:idOrSlug
 * 숫자 id 또는 slug 모두 허용
 */
router.get("/:idOrSlug", (req, res) => {
  const { idOrSlug } = req.params;
  const item = cocktails.find(
    c => String(c.id) === String(idOrSlug) || String(c.slug) === String(idOrSlug)
  );
  if (!item) return res.status(404).json({ message: "Cocktail not found" });
  res.json(item);
});

export default router;
