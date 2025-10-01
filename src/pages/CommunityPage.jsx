import { useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";

function Community() {
  const addPost = (e) => {
    e.preventDefault();
    // 글 작성 로직 추가
  };
  const { posts, setPosts } = useOutletContext();

  return (
    <div className="w-screen min-h-screen flex flex-col items-center pt-10 px-4 ">
      <ul className="w-[70%] text-white max-h-[80vh] overflow-y-auto border-white/10 rounded-lg">
        {/* 헤더 */}
        <li className="grid grid-cols-[80px_1fr_140px] sm:grid-cols-[80px_1fr_140px]
                        font-bold text-2xl border-white/10 border-b-4 pb-2 mb-2 text-center
                        sticky top-0 bg-[#1a1f36]">
            <div className="text-center">ID</div>
            <div className="text-left pl-2">제목</div>
            <div className="text-center">작성자</div>
        </li>

        {/* 글 */}
        {posts.map((p) => (
            <NavLink
              key={p.id}
              to={`/posts/${p.id}`}
              state={{posts : p}}
            >
              <li
                key={p.id}
                className="grid grid-cols-[80px_1fr_140px] sm:grid-cols-[80px_1fr_140px]
                border-white/10 border-b-4 py-2 items-center hover:bg-white/5"
                >
                <div className="text-center">{p.id}</div>
                <div className="text-left pl-2 truncate hover:font-bold hover:cursor-pointer">
                    {p.title}
                </div>
                <div className="text-center">{p.user}</div>
              </li>
            </NavLink>
        ))}
      </ul>
       {/* 글 작성 버튼 */}
      <form onSubmit={addPost} className="mt-6">
        <button
          type="submit"
          className="text-white ml-5 px-4 py-2 bg-[#ff917D] rounded-2xl hover:bg-[#FF6B6B] hover:cursor-pointer"
        >
          글 작성
        </button>
      </form>
    </div>
  );
}

export default Community;
