import { Outlet } from "react-router-dom";
import { useState } from "react";

function Main(){
  const [posts, setPosts] = useState([
    { id: 1, title: "디사론노 레시피 꿀팁", user: "Shin" },
    { id: 2, title: "말차 리큐르 헤르메스, 카나데 리뷰", user: "Jang" },
    { id: 3, title: "인천 칵테일바 추천", user: "Hanseo" },
    { id: 4, title: "도수 낮은 칵테일 모음", user: "asefsd" },
    { id: 5, title: "집에서 진토닉 맛있게 먹기", user: "nosee" },
    { id: 4, title: "부평 Bar 철문 후기", user: "imkara" },
    { id: 5, title: "켄터기 뮬 변형 레시피 -> 모스큐 뮬", user: "jysknk01" },
  ]);

  return (
    <main className="flex items-center justify-center flex-1">
      <Outlet context={{ posts, setPosts }} />
    </main>      
  );
}

export default Main;
