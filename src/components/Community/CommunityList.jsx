import { NavLink } from "react-router-dom";
import { posts } from "@/data/posts";

export default function CommunityList() {
  return (
    <ul>
      {posts.map((p) => (
        <li
          key={p.id}
          className="grid grid-cols-[80px_1fr_140px] sm:grid-cols-[80px_1fr_140px]
            border-white/10 border-b-4 py-2 items-center hover:bg-white/5"
        >
          <div className="text-center">{p.id}</div>
          <NavLink
            to={`/posts/${p.id}`}
            state={{ posts: p }}
            className="text-left pl-2 truncate hover:font-bold hover:cursor-pointer"
          >
            {p.title}
          </NavLink>
          <div className="text-center">{p.user}</div>
        </li>
      ))}
    </ul>
  );
}
