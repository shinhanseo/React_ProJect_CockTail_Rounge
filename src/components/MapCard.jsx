import { useEffect, useRef } from "react";
import { bars } from "@/data/bars";

export default function Map({ height = 500, width = 1000 }) {
  const mapRef = useRef(null);
  const infoWindowRef = useRef(null);

  const lat_home = 37.5076183;
  const lng_home = 126.7382614;

  useEffect(() => {
    const { naver } = window;
    if (!mapRef.current || !naver) return;

    const home = new naver.maps.LatLng(lat_home, lng_home);
    const map = new naver.maps.Map(mapRef.current, {
      center: home,
      zoom: 12,
    });

    infoWindowRef.current = new naver.maps.InfoWindow({
      backgroundColor: "#111827",
      borderColor: "#fff",
    });

    bars.forEach((bar) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(bar.lat, bar.lng),
        map,
        title: bar.name,
      });

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

    naver.maps.Event.addListener(map, "click", () => {
      infoWindowRef.current.close();
    });
  }, []);

  return (
    <div className="w-full">
      <div
        ref={mapRef}
        // Tailwind로는 동적 px 불가 → style 사용
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
        }}
        className="rounded-2xl overflow-hidden mx-auto"
      />
    </div>
  );
}
