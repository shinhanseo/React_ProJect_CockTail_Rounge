import { Outlet } from "react-router-dom";
import { useState } from "react";
import { posts as initialPosts } from "../data/posts";
function Main(){
  const [posts, setPosts] = useState(initialPosts);
  return (
    <main className="flex items-center justify-center flex-1">
      <Outlet context={{ posts, setPosts }} />
    </main>      
  );
}

export default Main;
