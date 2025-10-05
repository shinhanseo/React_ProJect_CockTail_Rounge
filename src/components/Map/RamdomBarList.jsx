import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { barsAPI } from "@/services/api";

export default function RamdomBarList() {
  const [popularBars, setPopularBars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularBars = async () => {
      try {
        setLoading(true);
        const response = await barsAPI.getBars({ size: 3 });
        setPopularBars(response.items || []);
      } catch (err) {
        console.error("Failed to fetch popular bars:", err);
        setPopularBars([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularBars();
  }, []);

  if (loading) {
    return (
      <>
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-2 rounded-lg bg-white/5 animate-pulse"
          >
            <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <div className="h-4 bg-gray-400 rounded mb-1"></div>
              <div className="h-3 bg-gray-400 rounded w-3/4"></div>
            </div>
            <div className="w-4 h-4 bg-gray-400 rounded"></div>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {popularBars.map((bar) => (
        <NavLink
          key={bar.id}
          to={`/bars/${bar.city}`}
          className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
        >
          <div className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm truncate">{bar.name}</div>
            <div className="text-xs text-gray-400 truncate">
              {bar.city} • {bar.desc}
            </div>
          </div>
          <div className="text-xs text-teal-400">📍</div>
        </NavLink>
      ))}
    </>
  );
}
