import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { bars } from "@/data/bars";

export default function MapPreView() {
  const mapRef = useRef(null);

  // 집 위치
  const lat_home = 37.5076183;
  const lng_home = 126.7382614;

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const home = new naver.maps.LatLng(lat_home, lng_home);

      const map = new naver.maps.Map(mapRef.current, {
        center: home,
        zoom: 15,
      });

      // bars 배열의 모든 마커 생성
      bars.forEach((bar) => {
        new naver.maps.Marker({
          position: new naver.maps.LatLng(bar.lat, bar.lng),
          map,
          title: bar.name,
        });
      });
    }
  }, []);

  return (
    <section className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold">칵테일여지도</h2>
        <NavLink
          to="/map"
          className="text-sm underline underline-offset-4 decoration-2 decoration-[#17BEBB] hover:font-bold"
        >
          더보기 →
        </NavLink>
      </div>
      <div className="w-full h-full">
        <div
          ref={mapRef}
          className="w-[80%] h-[80%] rounded-2xl overflow-hidden mx-auto mt-4"
        ></div>
      </div>
    </section>
  );
}
