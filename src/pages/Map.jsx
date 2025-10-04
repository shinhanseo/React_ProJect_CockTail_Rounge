import MapCard from "../components/MapCard";
import BarList from "../components/BarList";
export default function Map() {
  return (
    <div className="w-full flex gap-6 items-start mt-12">
      {/* 왼쪽: 지도 영역 */}
      <div className="flex-1">
        {/* MapCard가 width 문자열도 받도록 되어있다면 100% 권장 */}
        <MapCard height={500} width={800} />
      </div>

      {/* 오른쪽: 리스트 영역 */}
      <aside className="w-[500px] shrink-0 text-white">
        <BarList />
      </aside>
    </div>
  );
}
