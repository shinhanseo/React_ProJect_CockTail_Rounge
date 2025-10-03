import { useEffect, useRef } from "react";
import { bars } from "@/data/bars";

export default function Map() {
  const mapRef = useRef(null);
  const infoWindowRef = useRef(null);

  // 집 위치
  const lat_home = 37.5076183;
  const lng_home = 126.7382614;

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const home = new naver.maps.LatLng(lat_home, lng_home);

      const map = new naver.maps.Map(mapRef.current, {
        center: home,
        zoom: 12,
      });

      // 공용 InfoWindow (하나만 사용)
      infoWindowRef.current = new naver.maps.InfoWindow({
        backgroundColor: "#111827",
        borderColor: "#fff",
      });

      // bars 배열의 모든 마커 생성 + 이벤트 바인딩
      bars.forEach((bar) => {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(bar.lat, bar.lng),
          map,
          title: bar.name,
        });

        // 마커 클릭 시 InfoWindow 열기
        naver.maps.Event.addListener(marker, "click", () => {
          const content = `
            <div class="p-3 min-w-[200px] text-white text-sm leading-relaxed bg-[#111827] border border-white rounded-md -translate-y-2.5">
              <div class="font-bold text-base mb-1">${bar.name}</div>
              <div class="mb-1">📍 ${bar.address}</div>
              <div class="mb-1">☎ ${bar.phone}</div>
              <div class="mb-2">${bar.desc}</div>
              <a href="${bar.website}" target="_blank" rel="noopener"
                class="text-teal-400 underline hover:font-bold">네이버지도에서 보기</a>
            </div>
          `;
          infoWindowRef.current.setContent(content);
          infoWindowRef.current.open(map, marker);
        });
      });

      // 지도 클릭 시 InfoWindow 닫기
      naver.maps.Event.addListener(map, "click", () => {
        infoWindowRef.current.close();
      });
    }
  }, []);

  return (
    <div className="w-full">
      <div
        ref={mapRef}
        className="w-full h-[500px] max-w-[1000px] rounded-2xl overflow-hidden mx-auto mt-12"
      ></div>
    </div>
  );
}
