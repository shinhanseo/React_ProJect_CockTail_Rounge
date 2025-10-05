import express from "express";
import cors from "cors";

import barsRouter from "./routes/bars.js";
import cocktailsRouter from "./routes/cocktails.js";
import postsRouter from "./routes/posts.js";
import citysRouter from "./routes/citys.js"; // ✅ 추가

const app = express();

app.use(cors());
app.use(express.json());

// 정적 파일 서빙
app.use("/static", express.static("public"));

app.get("/healthz", (_, res) => res.send("ok"));

// ✅ 라우터 등록
app.use("/api/citys", citysRouter);
app.use("/api/bars", barsRouter);
app.use("/api/cocktails", cocktailsRouter);
app.use("/api/posts", postsRouter);

// 404 핸들러
app.use((req, res) => res.status(404).json({ message: "Not Found" }));

// 에러 핸들러
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || "Server Error" });
});

export default app;
