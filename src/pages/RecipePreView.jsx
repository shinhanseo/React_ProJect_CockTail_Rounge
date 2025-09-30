import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const tema = {
  season: [
    "오늘 같은 가을밤에 어울리는 칵테일🍂",
    "겨울밤을 따뜻하게 해줄 핫 칵테일 추천 ❄️",
    "여름밤 시원하게 즐기는 모히토 vs 진토닉 🏖️",
    "봄꽃 피는 날, 플로럴 칵테일 3선 🌸",
  ],
  mood: [
    "혼술할 때 딱 좋은 간단 칵테일 🍸",
    "파티에서 인기 폭발! 인스타 감성 칵테일 🎊",
    "연인과 특별한 날에 어울리는 로맨틱 칵테일 💕",
    "친구들과 게임할 때 마시면 재미있는 샷 칵테일 모음 🔥",
  ],
  food: [
    "치킨과 찰떡궁합 맥주 대신 칵테일 🍗",
    "스테이크와 어울리는 레드 베이스 칵테일 🥩",
    "디저트랑 같이 즐기는 달콤한 칵테일 🍨",
    "안주 필요 없는 올라운드 칵테일 🥂",
  ],
};

function getRandomTema() {
  const categories = Object.keys(tema);
  const randomCategory =
  categories[Math.floor(Math.random() * categories.length)];
  const items = tema[randomCategory];
  
  return items[Math.floor(Math.random() * items.length)];
}

function RecipePreView(){
  const [text, setText] = useState("");

  useEffect(() => {
    setText(getRandomTema());
  }, []);

  return(
    <section className="rounded-2xl border border-white/10 p-5 text-white bg-white/5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold">오늘의 추천 한잔</h2>
        <NavLink
          to="/recipe"
          className="text-sm underline underline-offset-4 decoration-2 decoration-[#17BEBB] hover:font-bold"
          aria-label="커뮤니티 더보기"
        >
          더보기 →
        </NavLink>
      </div>
      {/* <p>{text}</p> */}{/* 오늘의 추천 한잔 밑에 테마에 맞게 텍스트 출력하는 기능 */}
    </section>
  );
}

export default RecipePreView;