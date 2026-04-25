import "./Home.css";
import { Layout } from "antd";
import { useEffect } from "react";

import HomeHero from "./components/HomeHero";
import HomeStatsSection from "./components/HomeStatsSection";
import HomeFeaturesSection from "./components/HomeFeaturesSection";
import HomeWhySection from "./components/HomeWhySection";
import HomeContactSection from "./components/HomeContactSection";
import HomeSolutionsSection from "./components/HomeSolutionsSection";

const { Content } = Layout;

const Home = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    if (!revealElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, intersectionObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          intersectionObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <Content>
      <HomeHero />
      <HomeStatsSection />
      <HomeSolutionsSection />
      <HomeWhySection />
      <HomeFeaturesSection />
      <HomeContactSection />
    </Content>
  );
};

export default Home;