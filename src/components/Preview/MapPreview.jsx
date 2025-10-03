import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import MapCard from "../MapCard";

export default function MapPreView() {
  return (
    <section className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold">칵테일여지도</h2>
        <NavLink
          to="/map"
          className="text-sm underline underline-offset-4 decoration-2 decoration-underline hover:font-bold"
        >
          더보기 →
        </NavLink>
      </div>
      <MapCard height={200} width={300} />
    </section>
  );
}
