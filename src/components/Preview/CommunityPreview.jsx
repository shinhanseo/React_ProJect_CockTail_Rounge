import { NavLink } from "react-router-dom";
import { posts } from "@/data/posts";

//커뮤니티 최신글 5개 미리보기
export default function CommunityPreview() {
  const latest = posts.slice().reverse().slice(0, 5); // 역으로 5개 복사
  let num = 0;
  return (
    <section className="rounded-2xl border border-white/10 p-5 text-white bg-white/5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold">커뮤니티 최신글</h2>
        <NavLink
          to="/community"
          className="text-sm underline underline-offset-4 decoration-2 decoration-underline hover:font-bold"
        >
          더보기 →
        </NavLink>
      </div>

      <ul>
        {latest.map((p) => (
          <li
            key={p.id}
            className="py-2 flex items-center gap-3 hover:bg-white/5"
          >
            <span className="text-white/50 w-10 text-center">{++num}</span>
            <NavLink
              key={p.id}
              to={`/posts/${p.id}`}
              state={{ posts: p }}
              className="flex-1 hover:cursor-pointer hover:font-bold"
              title={p.title}
            >
              {/* 15자 이상 ...으로 대체 */}
              {p.title.length > 15 ? p.title.slice(0, 15) + "..." : p.title}
            </NavLink>
            <span className="text-white/70 text-sm w-[90px] text-right">
              {p.user}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
