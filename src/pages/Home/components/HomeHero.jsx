import { Typography } from "antd";
import heroImg from "../../../assets/hero-image.webp";
import LazyBackground from "../../../components/LazyBackground";
import { colors } from "../colors";
import { pageData } from "../homeData";

const { Title, Paragraph } = Typography;

const HomeHero = () => {
  return (
    <LazyBackground
      src={heroImg}
      priority
      className="home-hero reveal-on-scroll is-visible"
    >
      <div className="home-hero-content">
        <Title className="home-hero-title">
          Innovating{" "}
          <span style={{ color: colors.lightGreen }}>A Greener Future</span>
        </Title>

        <Title level={1} className="home-hero-subtitle">
          {pageData.hero.subTitle}
        </Title>

        <Paragraph className="home-hero-description">
          {pageData.hero.description}
        </Paragraph>
      </div>
    </LazyBackground>
  );
};

export default HomeHero;