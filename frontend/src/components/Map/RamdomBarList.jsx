import { bars } from "@/data/bars";
import { NavLink } from "react-router-dom";

export default function RamdomBarList() {
  const popularBars = bars.slice(0, 3);

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
