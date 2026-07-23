import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home/Home";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Solutions = lazy(() => import("./pages/Solutions/Solutions"));

// App component that sets up routing for the application using React Router.
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="projects" element={<Projects />} />
            <Route path="solutions" element={<Solutions />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
