// Footer.jsx
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-white/200 text-white">
      {/* 하단 바 */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-white/60 flex items-center justify-between gap-4">
          <p>© 2025 Cocktail Lounge. All rights reserved.</p>
          <p className="mr-12 text-lg my-auto">
            <span className="text-title font-bold">Cocktail Lounge</span>🍹
            오늘의 한잔을 찾다
          </p>
          <div className="flex items-center gap-4">
            <NavLink to="" className="hover:underline underline-offset-4">
              이용약관
            </NavLink>
            <NavLink to="" className="hover:underline underline-offset-4">
              개인정보처리방침
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
