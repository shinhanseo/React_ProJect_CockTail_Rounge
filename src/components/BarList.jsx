import { bars } from "@/data/bars";

export default function BarList() {
  return (
    <ul className="mr-12">
      <li
        className="grid grid-cols-[200px_200px] sm:grid-cols-[200px_200px]
        font-bold text-2xl border-white/10 border-b-4 pb-2 mb-2 text-center
        sticky top-0 bg-header"
      >
        <div className="text-center">매장명</div>
        <div className="text-center">위치</div>
      </li>
      {bars.map((b) => (
        <li
          key={b.id}
          className="grid grid-cols-[200px_200px] sm:grid-cols-[200px_200px]
                     border-white/10 border-b-4 py-2 hover:bg-white/5"
        >
          <div className="text-center">{b.name}</div>
          <div className="text-center">{b.address}</div>
        </li>
      ))}
    </ul>
  );
}
