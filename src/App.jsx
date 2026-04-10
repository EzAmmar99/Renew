import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/aboutUs";
import Projects from "./pages/projects";
import Solutions from "./pages/solutions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="solutions" element={<Solutions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
