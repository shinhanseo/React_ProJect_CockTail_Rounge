import { Router } from "express";
import { posts } from "../mock/posts.js";

const router = Router();

/**
 * GET /api/posts
 * 예: /api/posts?page=1&size=20&author=Shin&tag=리뷰&q=후기
 * 최신 날짜 순 정렬(desc) 기본 적용
 */
router.get("/", (req, res) => {
  const { page = "1", size = "20", author, tag, q } = req.query;

  // 최신 날짜 순으로 정렬 (문자열 날짜 기준이지만 ISO/YYYY-MM-DD라 괜찮음)
  let data = [...posts].sort((a, b) => String(b.date).localeCompare(String(a.date)));

  if (author) {
    const k = String(author).toLowerCase();
    data = data.filter(p => String(p.user || "").toLowerCase().includes(k));
  }

  if (tag) {
    data = data.filter(p => (p.tags || []).includes(String(tag)));
  }

  if (q) {
    const k = String(q).toLowerCase();
    data = data.filter(p =>
      (p.title || "").toLowerCase().includes(k) ||
      (p.body || "").toLowerCase().includes(k)
    );
  }

  const p = Math.max(parseInt(page, 10) || 1, 1);
  const s = Math.max(parseInt(size, 10) || 20, 1);
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
  const item = posts.find(p => String(p.id) === String(id));
  if (!item) return res.status(404).json({ message: "Post not found" });
  res.json(item);
});

export default router;
