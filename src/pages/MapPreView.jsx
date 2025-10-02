import { useEffect, useRef } from "react";
import { NavLink

 } from "react-router-dom";
function MapPreView(){
  const mapRef = useRef(null);
  const lat = 37.5076183;// 위도 
  const lng = 126.7382614;// 경도 
    
  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const home = new naver.maps.LatLng(lat, lng);
      // const bar1 = new naver.maps.LatLng(37.49492040000001, 126.7249768);
      const map = new naver.maps.Map(mapRef.current, {
      center: home,
      zoom: 15, // 지도 확대 정도
    });
    new naver.maps.Marker({
      position: home, //bar1,
      map,
    });
    }
  }, []);

  return(
    <section className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold">전국 칵테일여지도</h2>
        <NavLink
          to="/map"
          className="text-sm underline underline-offset-4 decoration-2 decoration-[#17BEBB] hover:font-bold"
          >
          더보기 →
        </NavLink>
      </div>
      <div className="w-full h-full">
        <div ref={mapRef} className="w-[80%] h-[80%] rounded-2xl overflow-hidden mx-auto mt-4"></div>
      </div>
    </section>

  )
}

export default MapPreView;