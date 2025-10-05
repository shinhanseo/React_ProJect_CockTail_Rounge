import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { citysAPI } from "@/services/api";

export default function BarCity() {
  const [citys, setCitys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCitys = async () => {
      try {
        setLoading(true);
        const response = await citysAPI.getCitys();
        setCitys(response.items || []);
      } catch (err) {
        console.error("Failed to fetch citys:", err);
        setError("도시 정보를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchCitys();
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-6 my-4 text-white">
        {[...Array(9)].map((_, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/10 bg-white/5 h-32 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-white text-center py-10">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 my-4 text-white">
      {citys.map((c, idx) => (
        <NavLink
          key={idx}
          to={`/bars/${c.city}`}
          className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-center hover:scale-105 transition-transform"
        >
          <img src={c.image} alt={c.city} className="w-full h-30 object-fill" />
          <p className="my-auto">{c.city}</p>
        </NavLink>
      ))}
    </div>
  );
}
