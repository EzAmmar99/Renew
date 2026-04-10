import { Typography } from "antd";
import "./AboutUs.css";

import aboutImage from "../../assets/about-us-hero.png";
import missionImage from "../../assets/mission-image.png";
import visionImage from "../../assets/vision-image.png";
import coreValuesImage from "../../assets/core-values-image.png";

import missionIcon from "../../assets/mission-icon.png";
import visionIcon from "../../assets/vision-icon.png";
import coreValuesIcon from "../../assets/core-values-icon.png";

import missionShape from "../../assets/shape.png";
import visionShape from "../../assets/shape.png";

const { Title, Paragraph } = Typography;

const AboutSection = () => {
  return (
    <div className="about-us-container">
      <section className="about-hero-section">
        <img src={aboutImage} alt="About Us" className="about-hero-image" />

        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <Title level={1} className="about-hero-title">
              About US
            </Title>

            <Paragraph className="about-hero-text">
              Comprehensive
              <br />
              Waste-To-Resource Solutions
            </Paragraph>
          </div>
        </div>
      </section>

      <section className="who-we-are-section">
        <div className="who-we-are-container">
          <Title level={2} className="who-we-are-title">
            Who We Are
          </Title>

          <Paragraph className="who-we-are-text">
            RENEW Is An Egyptian Alternative Energy Company Committed To Turning
            Agricultural Waste Into Powerful, Sustainable Fuel. Specializing In
            Biomass Sourced From Tree Trimmings, We Help High Fuel-Consuming
            Industries Transition From Fossil Fuels To Cleaner, More Reliable
            Energy Solutions.
          </Paragraph>
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="mission-vision-grid">
          <div className="mission-card">
            <img
              src={missionShape}
              alt=""
              className="mission-shape"
              aria-hidden="true"
            />

            {/* <div className="mission-ellipse" /> */}

            <div className="mission-content">
              <div className="mission-header">
                <img
                  src={missionIcon}
                  alt="Mission Icon"
                  className="mission-icon"
                />

                <Title level={2} className="mission-title">
                  Mission
                </Title>
              </div>

              <Paragraph className="mission-text">
                to bridge the gap between agricultural waste producers and
                energy-intensive industries by providing a high-performance,
                eco-friendly fuel alternative. through innovation and
                responsible resource use, renew is dedicated to reducing
                environmental pollution and driving egypt&apos;s shift toward
                sustainable energy.
              </Paragraph>
            </div>
          </div>

          <div className="mission-image-block">
            <img
              src={missionImage}
              alt="Mission"
              className="mission-vision-image"
            />
          </div>

          <div className="vision-image-block">
            <img
              src={visionImage}
              alt="Vision"
              className="mission-vision-image"
            />
          </div>

          <div className="vision-card">
            <img
              src={visionShape}
              alt=""
              className="vision-shape"
              aria-hidden="true"
            />

            {/* <div className="vision-ellipse" /> */}

            <div className="vision-content">
              <div className="vision-header">
                <img
                  src={visionIcon}
                  alt="Vision Icon"
                  className="vision-icon"
                />

                <Title level={2} className="vision-title">
                  Vision
                </Title>
              </div>

              <Paragraph className="vision-text">
                to become egypt&apos;s leading biomass supplier—recognized for
                our commitment to quality, operational excellence, and
                environmental stewardship—while shaping a cleaner, more reliable
                future for generations to come.
              </Paragraph>
            </div>
          </div>
        </div>

        <div className="core-values-banner">
          <img
            src={coreValuesImage}
            alt="Core Values"
            className="core-values-image"
          />

          <div className="core-values-overlay">
            <div className="core-values-content">
              <img
                src={coreValuesIcon}
                alt="Core Values Icon"
                className="core-values-icon"
              />

              <Title level={2} className="core-values-title">
                Core Values
              </Title>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
