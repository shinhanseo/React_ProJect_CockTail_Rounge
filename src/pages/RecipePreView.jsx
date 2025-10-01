import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { cocktails } from "../data/cocktails";

function getRandomId(min = 1, max) {
  if (typeof max !== "number") throw new Error("max가 필요합니다");
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RecipePreView(){
  const [id, setId] = useState(1);
  const cocktailId = getRandomId(1, cocktails.length)
  useEffect(() => {
    if (cocktails?.length > 0) {
      const index = Math.floor(Math.random() * cocktails.length) + 1; // 0 ~ length-1
      setId(cocktails[index]);
    }
  }, []);
  const cocktail = cocktails.find(c => c.id === cocktailId);

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
      <div className="rounded-2xl border border-white/10 bg-white/5 text-center w-[50%] mx-[25%]">
        <NavLink
          key={cocktail.slug}
          to={`/cocktails/${cocktail.slug}`}
          state={{ cocktails: cocktail }}
          >
          <img
            src={cocktail.image}
            alt={cocktail.name}
            className="w-full h-40 object-cover rounded-t-2xl"
            />
          <p className="my-auto">{cocktail.name}</p>
        </NavLink>
      </div>
    </section>
  );
}

export default RecipePreView;