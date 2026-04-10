import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footerr from "../components/Footerr";

export default function MainLayout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <Footerr />
    </div>
  );
}
