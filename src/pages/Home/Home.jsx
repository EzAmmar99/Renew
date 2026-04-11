import "./Home.css";
import { Layout } from "antd";

import HomeHero from "./components/HomeHero";
import HomeStatsSection from "./components/HomeStatsSection";
import HomeFeaturesSection from "./components/HomeFeaturesSection";
import HomeWhySection from "./components/HomeWhySection";
import HomeContactSection from "./components/HomeContactSection";
import HomeSolutionsSection from "./components/HomeSolutionsSection";

const { Content } = Layout;

const Home = () => {
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