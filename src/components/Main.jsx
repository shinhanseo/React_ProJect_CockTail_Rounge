import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <main className="flex items-center justify-center flex-1">
      <Outlet />
    </main>
  );
}
