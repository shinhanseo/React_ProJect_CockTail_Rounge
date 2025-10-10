// frontend/src/components/Recipe/RecipeList.jsx
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RecipeList() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get("http://localhost:4000/api/cocktails");
        setCocktails(Array.isArray(res.data?.items) ? res.data.items : []);
      } catch (err) {
        if (err.name !== "CanceledError") {
          setError("칵테일을 불러오는 중 오류가 발생했습니다.");
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading)
    return <div className="text-white text-center py-12">불러오는 중...</div>;
  if (error)
    return <div className="text-red-400 text-center py-12">{error}</div>;
  if (cocktails.length === 0)
    return (
      <div className="text-white text-center py-12">레시피가 없습니다</div>
    );

  return (
    <div className="mt-8">
      <h2 className="text-center text-white text-xl md:text-2xl font-bold mb-6">
        다양한 칵테일 레시피를 만나보세요 🍸
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        {cocktails.map((c) => (
          <NavLink
            key={c.slug}
            to={`/cocktails/${c.slug}`}
            state={{ cocktails: c }}
            className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden
                       shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-all duration-300
                       hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
          >
            {/* 이미지 (꽉 차게) */}
            <div className="relative w-full h-40 sm:h-44 md:h-48 overflow-hidden">
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* hover 시 어두운 오버레이 + "더보기" */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100
                           bg-black/40 flex items-center justify-center transition-opacity duration-300"
              >
                <span className="text-white font-bold text-sm bg-white/10 rounded-xl px-3 py-1">
                  더보기 →
                </span>
              </div>
            </div>

            {/* 이름 텍스트: 이미지와 분리된 하단 영역 */}
            <div className="py-3 text-center border-t border-white/10 bg-white/5">
              <p className="text-white text-sm md:text-base font-semibold tracking-wide truncate">
                {c.name}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
