import { Typography } from "antd";
import heroImg from "../../../assets/hero-image.png";
import { colors } from "../colors";
import { pageData } from "../homeData";

const { Title, Paragraph } = Typography;

const HomeHero = () => {
  return (
    <div
      className="home-hero reveal-on-scroll is-visible"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
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
    </div>
  );
};

export default HomeHero;