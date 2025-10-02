import { useEffect, useRef } from "react";
import { bars } from "../data/bars";

function Map(){
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
    <div className="w-full h-[700px]">
      <div 
        ref={mapRef} 
        className="w-[80%] h-[80%] rounded-2xl overflow-hidden mx-auto mt-12"
      ></div>
    </div>
  );
}

export default Map;
