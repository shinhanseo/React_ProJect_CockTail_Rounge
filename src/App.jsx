import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-[#1a1f36] flex flex-col min-h-screen">
      <Header /> {/* 상단 메뉴바 */}
      <Outlet /> {/* Main */}
      <Footer /> {/* 하단 Footer */}
    </div>
  );
}
