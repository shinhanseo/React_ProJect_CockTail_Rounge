import { NavLink } from "react-router-dom";
import { citys } from "@/data/citys";
export default function BarCity() {
  return (
    <div className="grid md:grid-cols-3 gap-6 my-4 text-white">
      {citys.map((c, idx) => (
        <NavLink
          key={idx}
          to={`/bars/${c.city}`}
          className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-center hover:scale-105 "
        >
          <img src={c.image} alt={c.city} className="w-full h-30 object-fill" />
          <p className="my-auto">{c.city}</p>
        </NavLink>
      ))}
    </div>
  );
}
