import "./Home.css";
import { useState, useEffect } from "react";
import {
  Layout,
  Button,
  Typography,
  Row,
  Col,
  Space,
  Spin,
  Card,
  Divider,
} from "antd";

import {
  SettingOutlined,
  BulbOutlined,
  ShakeOutlined,
  SendOutlined,
} from "@ant-design/icons";
import heroImg from "../assets/hero.png";
import editsImg from "../assets/edits.png";

import img1 from "../assets/Products-1.png";
import img2 from "../assets/Products-2.png";
import img3 from "../assets/Products-3.png";
import img4 from "../assets/Products-4.png";
import img5 from "../assets/Products-5.png";
import img6 from "../assets/Products-6.png";

import featureImg1 from "../assets/feature-1.png";
import featureImg2 from "../assets/feature-2.png";
import featureImg3 from "../assets/feature-3.png";
// import featureImg4 from "../assets/feature-4.png";
import featureImg5 from "../assets/feature-5.png";
// import featureImg6 from "../assets/feature-6.png";

import teamContactImg from "../assets/teamContact.png";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const pageData = {
  hero: {
    mainTitle: "Innovating A Greener Future",
    subTitle: "With Renewable Solutions",
    description:
      "discover how renew turns agricultural waste into biomass, sustainable materials, and renewable energy. join us in building a cleaner, greener future.",
  },
  stats: [
    { id: 1, value: "Top 5 Or 6", label: "Cement Factories" },
    { id: 2, value: "+200,000", label: "Tn Supplied" },
    {
      id: 3,
      value: "+ 240,000",
      label: "Tons Of CO₂ Equivalent Replaced",
    },
    { id: 4, value: "2015", label: "Established" },
  ],
  solutions: [
    {
      id: 1,
      title: "Processed Biomass Fuel",
      image: img1,
    },
    {
      id: 2,
      title: "Reliable Year-Round Supply",
      image: img2,
    },
    {
      id: 3,
      title: "Industrial Fuel Integration",
      image: img3,
    },
    {
      id: 4,
      title: "Agricultural Waste Conversion",
      image: img4,
    },
    {
      id: 5,
      title: "Sustainable Energy Logistics",
      image: img5,
    },
    {
      id: 6,
      title: "Alternative Fuel Consulting",
      image: img6,
    },
  ],
  features: [
    {
      id: "01",
      title: "Proven Industry Expertise",
      description:
        "Backed By 20+ Years In Alternative Fuel And 35+ Years In Cement Industry.",
      image: featureImg1,
      bgColor: "#a8c63f",
      icon: <SettingOutlined style={{ fontSize: "30px", color: "#91b53a" }} />,
      isReversed: true,
    },
    {
      id: "02",
      title: "Superior Biomass Quality",
      description: "High Heat Value, Low Ash—Ideal For Industrial Use.",
      image: featureImg2,
      bgColor: "#4f8f3d",
      icon: <BulbOutlined style={{ fontSize: "30px", color: "#4f8f3d" }} />,
      isReversed: false,
    },
    {
      id: "03",
      title: "Reliable Year-Round Supply",
      description: "Consistent Delivery Through A Diversified Network.",
      image: featureImg3,
      bgColor: "#a8c63f",
      icon: <ShakeOutlined style={{ fontSize: "30px", color: "#91b53a" }} />,
      isReversed: true,
    },
    {
      id: "04",
      title: "End-To-End Operational Support",
      description: "From Sourcing To Logistics—Handled In-House.",
      image: featureImg3,
      bgColor: "#4f8f3d",
      icon: <SettingOutlined style={{ fontSize: "28px", color: "#4f8f3d" }} />,
      isReversed: false,
    },
    {
      id: "05",
      title: "Smart Commercial Solutions",
      description: "Flexible Contracts Tailored To Your Fuel Needs.",
      image: featureImg5,
      bgColor: "#a8c63f",
      icon: <BulbOutlined style={{ fontSize: "28px", color: "#7ea03a" }} />,
      isReversed: true,
    },
    {
      id: "06",
      title: "Sustainability At The Core",
      description: "Turning Waste Into Energy, Reducing CO₂ Emissions.",
      image: featureImg3,
      bgColor: "#4f8f3d",
      icon: <ShakeOutlined style={{ fontSize: "28px", color: "#4f8f3d" }} />,
      isReversed: false,
    },
  ],
};

const colors = {
  primaryYellow: "#FEC858",
  lightGreen: "#9FBA3D",
  darkGreen: "#21381C",
  grayText: "#838486",
};

const StatItem = ({ value, label }) => (
  <Col xs={24} sm={12} md={6} className="stat-item">
    <Title level={2} className="stat-value">
      {value}
    </Title>
    <Text className="stat-label">{label}</Text>
  </Col>
);

const SolutionCard = ({ title, image }) => (
  <Col xs={24} sm={12} md={8}>
    <div className="solution-card">
      <img src={image} alt={title} className="solution-card-image" />
      <div className="solution-card-overlay" />
      <Title level={4} className="solution-card-title">
        {title}
      </Title>
    </div>
  </Col>
);

const FeatureRow = ({
  id,
  title,
  description,
  image,
  icon,
  isReversed = false,
  bgColor,
  contentWidth = 430,
  descWidth = 390,
}) => {
  const TextContent = (
    <div className="feature-text" style={{ background: bgColor }}>
      <div className="feature-watermark">
        <span>m</span>
      </div>

      <div
        className="feature-text-inner"
        style={{ maxWidth: `${contentWidth}px` }}
      >
        <div className="feature-top-row">
          <div className="feature-id">{id}</div>
          <div className="feature-icon-wrapper">{icon}</div>
        </div>

        <Title level={2} className="feature-title">
          {title}
        </Title>

        <Paragraph
          className="feature-description"
          style={{ maxWidth: `${descWidth}px` }}
        >
          {description}
        </Paragraph>
      </div>
    </div>
  );

  const ImageContent = (
    <div className="feature-image-wrapper">
      <img src={image} alt={typeof title === "string" ? title : "feature"} className="feature-image" />
    </div>
  );

  return (
    <Row gutter={0} wrap={false} align="stretch" className="feature-row">
      {isReversed ? (
        <>
          <Col flex="1 1 50%" className="feature-col">
            {ImageContent}
          </Col>
          <Col flex="1 1 50%" className="feature-col">
            {TextContent}
          </Col>
        </>
      ) : (
        <>
          <Col flex="1 1 50%" className="feature-col">
            {TextContent}
          </Col>
          <Col flex="1 1 50%" className="feature-col">
            {ImageContent}
          </Col>
        </>
      )}
    </Row>
  );
};


const Home = () => {
  return (
    <Content>
      <div
        className="home-hero"
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

      <div
        className="home-stats-section"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 74, 34, 0.9), rgba(45, 74, 34, 0.9)), url(${editsImg})`,
        }}
      >
        <div className="home-stats-header">
          <Title level={2} className="home-stats-title">
            Renew By The Numbers
          </Title>
          <div className="home-stats-line" />
        </div>

        <Row gutter={[16, 32]} justify="center">
          {pageData.stats.map((stat) => (
            <StatItem key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </Row>
      </div>

      <div className="home-solutions-section">
        <Title level={2} className="home-solutions-title">
          Key Products & Solutions
        </Title>

        <Paragraph className="home-solutions-description">
          Comprehensive End-To-End Technology Solutions For All Types Of Organic
          Waste
        </Paragraph>

        <Row gutter={[24, 24]}>
          {pageData.solutions.map((sol) => (
            <SolutionCard key={sol.id} title={sol.title} image={sol.image} />
          ))}
        </Row>
      </div>

      <div className="home-why-section">
        <div className="home-why-header">
          <div className="home-why-title-row">
            <div className="home-why-line home-why-line-left">
              <span className="home-why-dot home-why-dot-right" />
            </div>

            <Title level={2} className="home-why-title">
              Why Choose Us
            </Title>

            <div className="home-why-line home-why-line-right">
              <span className="home-why-dot home-why-dot-left" />
            </div>
          </div>

          <Paragraph className="home-why-description">
            At RENEW, We Are Committed To Creating A Sustainable Future By
            Transforming Agricultural Waste Into Valuable Energy Solutions.
            Here's Why You Can Trust Us To Lead The Way:
          </Paragraph>
        </div>
      </div>

      <div className="home-features-section">
        {pageData.features.map((item) => (
          <FeatureRow key={item.id} {...item} />
        ))}
      </div>

      <div className="home-contact-section">
        <div className="home-contact-header">
          <Title level={2} className="home-contact-title">
            Ready To Power Your Industry With Clean Energy?
          </Title>

          <Paragraph className="home-contact-description">
            Whether You're Looking To Reduce Fuel Costs, Improve Sustainability,
            Or Explore Reliable Biomass Solutions—RENEW Is Here To Help.
          </Paragraph>
        </div>

        <Row gutter={[60, 40]} align="middle">
          <Col xs={24} md={11}>
            <Title level={3} className="home-contact-text">
              Our Team Is Ready To Answer Your Questions And Explore How We Can
              Support Your Energy Needs.
            </Title>

            <Button
              type="primary"
              icon={<SendOutlined rotate={-45} />}
              className="home-contact-button"
            >
              Let’s Talk
            </Button>
          </Col>

          <Col xs={24} md={13}>
            <div className="home-contact-image-wrapper">
              <div className="home-contact-image-frame" />
              <img
                src={teamContactImg}
                alt="Team contact"
                className="home-contact-image"
              />
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default Home;
