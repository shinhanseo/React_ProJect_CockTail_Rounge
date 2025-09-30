import { cocktails } from "../data/cocktails";
import { NavLink } from "react-router-dom";

function Recipe(){
  return(
    <section>
      <div className="grid md:grid-cols-4 gap-6 my-4 text-white">
        {cocktails.map((c) => (
        <NavLink
          key={c.slug}
          to={`/cocktails/${c.slug}`}
          state={{ cocktails: c }}
          className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-center"
        >
          <img
            src={c.image}
            alt={c.name}
            className="w-full h-40 object-cover"
          />
          <p className="mt-2">{c.name}</p>
        </NavLink>

        ))}
      </div>
    </section>
  );
}

export default Recipe;