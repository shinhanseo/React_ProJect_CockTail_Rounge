import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { bars } from "@/data/bars";
import { NavLink } from "react-router-dom";
import MapCard from "@/components/Map/MapCard";

export default function BarDetail() {
  const { city } = useParams();
  const [selectedBar, setSelectedBar] = useState(null);

  // 도시 변경 시 선택 초기화(권장)
  useEffect(() => {
    setSelectedBar(null);
  }, [city]);

  const handleBarSelect = (bar) => setSelectedBar(bar);

  // 도시별로 필터링
  const filteredBars = city ? bars.filter((b) => b.city === city) : [];

  if (!city) {
    return (
      <div className="text-white text-center py-10">
        <h2 className="text-2xl font-bold mb-4">도시를 선택해주세요</h2>
        <p>BarCity에서 원하는 도시를 클릭하세요.</p>
      </div>
    );
  }

  return (
    <div className="w-full mt-12">
      {/* 제목 */}
      <div className="w-full text-white text-center mb-6">
        <h2 className="text-2xl font-bold">{city}</h2>
      </div>
      <div className="mb-4">
        <NavLink to="/map" className="text-sm text-white/70 hover:font-bold">
          ← 목록으로
        </NavLink>
      </div>
      <div className="flex gap-6 items-start">
        {/* 왼쪽: 지도 영역 */}
        <div className="flex-1">
          <MapCard
            height={500}
            width="100%"
            selectedBar={selectedBar}
            centerKey={city} // ← 문자열
            bars={filteredBars} // ← 전체 bars import 금지, 반드시 필터 결과 전달
          />
        </div>

        {/* 오른쪽: 리스트 영역 */}
        <aside className="w-[500px] shrink-0 text-white">
          <ul className="mr-12 h-[500px] overflow-y-auto overflow-x-hidden">
            {/* 헤더 */}
            <li
              className="grid grid-cols-[200px_1fr]
                       font-bold text-2xl border-white/10 border-b-4 pb-2 mb-2 text-center
                       sticky top-0 bg-header"
            >
              <div>매장명</div>
              <div>위치</div>
            </li>

            {/* 바 목록 (선택된 도시만 표시) */}
            {filteredBars.map((b) => (
              <li
                key={b.id}
                className="grid grid-cols-[200px_1fr]
                         border-white/10 border-b-4 py-2 hover:bg-white/5"
              >
                <button
                  type="button"
                  className="text-center cursor-pointer hover:text-teal-400 transition-colors"
                  onClick={() => handleBarSelect(b)}
                >
                  {b.name}
                </button>
                <div className="text-center">{b.address}</div>
              </li>
            ))}

            {filteredBars.length === 0 && (
              <li className="text-center text-gray-400 py-10">
                선택한 지역의 Bar 정보가 없습니다.
              </li>
            )}
          </ul>
        </aside>
      </div>
    </div>
  );
}
