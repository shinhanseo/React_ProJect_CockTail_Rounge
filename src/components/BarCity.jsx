import { NavLink } from "react-router-dom";
export default function BarCity() {
  const citys = [
    "인천",
    "서울",
    "부산",
    "경상도",
    "전라도",
    "제주",
    "충청도",
    "경기도",
    "강원도",
  ];
  return (
    <div className="grid md:grid-cols-3 gap-6 my-4 text-white">
      {citys.map((c, idx) => (
        <NavLink
          to={`/bars/${c}`}
          key={idx}
          state={{ c }}
          className="rounded-2xl 
          border border-white/10 bg-white/5 
          overflow-hidden text-center hover:scale-115 
          transition-transform p-12 hover:cursor-pointer"
        >
          {c}
        </NavLink>
      ))}
    </div>
  );
}
