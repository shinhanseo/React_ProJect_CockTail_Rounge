import { useState } from "react";
import MapCard from "../components/MapCard";
import BarList from "../components/BarList";
import BarCity from "../components/BarCity";

export default function Map() {
  return (
    <div>
      <div className="text-white text-xl text-center">
        내 주변의 분위기 좋은 Bar를 찾아보세요!
      </div>
      <BarCity />
    </div>
  );
}
