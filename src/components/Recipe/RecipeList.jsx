import { cocktails } from "@/data/cocktails";
import { NavLink } from "react-router-dom";

export default function RecipeList() {
  return (
    <div className="grid md:grid-cols-4 gap-6 my-4 text-white">
      {cocktails.map((c) => (
        <NavLink
          key={c.slug}
          to={`/cocktails/${c.slug}`}
          state={{ cocktails: c }}
          className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-center hover:scale-105 "
        >
          <img src={c.image} alt={c.name} className="w-full h-30 object-fill" />
          <p className="my-auto">{c.name}</p>
        </NavLink>
      ))}
    </div>
  );
}
