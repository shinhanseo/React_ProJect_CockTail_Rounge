import express from "express";
import cors from "cors";
import postsRouter from "./routes/posts.js";
import cocktailsRouter from "./routes/cocktails.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/healthz", (_, res) => res.send("ok"));

//라우터 등록
app.use("/api/posts", postsRouter);
app.use("/static", express.static(path.resolve("backend/public")));
app.use("/api/cocktails", cocktailsRouter);
// 404 핸들러 
app.use((req, res) => res.status(404).json({ message: "Not Found" }));

// 에러 핸들러
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || "Server Error" });
});

export default app;
