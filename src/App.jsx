import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
// import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import Projects from "./pages/Projects/Projects";
import Solutions from "./pages/Solutions/Solutions";
import Home from "./pages/Home/Home";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

// App component that sets up routing for the application using React Router.
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
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
