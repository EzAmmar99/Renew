import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { Footer } from "antd/es/layout/layout";

export default function MainLayout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">{/* <Outlet /> */}</main>
      <Footer />
    </div>
  );
}
