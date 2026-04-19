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

import sustainabilityIcon from "../../assets/sustainability-icon.png";
import reliabilityIcon from "../../assets/reliability-icon.png";
import innovationIcon from "../../assets/innovation-icon.png";
import integrityIcon from "../../assets/integrity-icon.png";

import whatWeDoImage from "../../assets/what-we-do-image.png";
import fuelProductionIcon from "../../assets/fuel-production-icon.png";
import performanceIcon from "../../assets/performance-icon.png";
import supplyIcon from "../../assets/supply-icon.png";

import cleanEnergyIcon from "../../assets/clean-energy-icon.png";
import wasteReductionIcon from "../../assets/waste-reduction-icon.png";
import environmentIcon from "../../assets/environment-icon.png";
import ImpactSection from "./ImpactSection";
import KeyPeopleSection from "./KeyPeopleSection";
import LeadershipSection from "./LeadershipSection";

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

      <section className="values-slider-section">
        <div className="values-slider">
          <div className="value-slide">
            <div className="value-card">
              <div className="value-card-header-center">
                <img
                  src={sustainabilityIcon}
                  alt="icon"
                  className="value-icon-header"
                />
                <h3 className="value-title">Sustainability</h3>
              </div>

              <p className="value-text">
                we believe in the power of renewable resources to build a
                greener tomorrow. every solution we offer is rooted in
                environmental responsibility.
              </p>
            </div>{" "}
          </div>

          <div className="value-slide">
            <div className="value-card">
              <div className="value-card-header-center">
                <img
                  src={reliabilityIcon}
                  alt="Reliability Icon"
                  className="value-icon-header"
                />
                <h3 className="value-title">Reliability</h3>
              </div>

              <p className="value-text">
                we are committed to consistent performance and uninterrupted
                supply, ensuring our partners can rely on us every step of the
                way.
              </p>
            </div>
          </div>

          <div className="value-slide">
            <div className="value-card">
              <div className="value-card-header-center">
                <img
                  src={innovationIcon}
                  alt="Innovation Icon"
                  className="value-icon-header"
                />
                <h3 className="value-title">Innovation</h3>
              </div>

              <p className="value-text">
                we operate with transparency and accountability, putting
                long-term impact over short-term gain.
              </p>
            </div>
          </div>

          <div className="value-slide">
            <div className="value-card">
              <div className="value-card-header-center">
                <img
                  src={integrityIcon}
                  alt="Integrity Icon"
                  className="value-icon-header"
                />
                <h3 className="value-title">Integrity</h3>
              </div>

              <p className="value-text">
                we operate with transparency and accountability, putting
                long-term impact over short-term gain.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do-section">
        <div className="what-we-do-container">
          <div className="what-we-do-top">
            <div className="what-we-do-image-wrap">
              <img
                src={whatWeDoImage}
                alt="Biomass production"
                className="what-we-do-image"
              />
            </div>

            <div className="what-we-do-content">
              <Title level={2} className="what-we-do-title">
                What We Do
              </Title>

              <Paragraph className="what-we-do-text">
                At RENEW, we specialize in transforming agricultural
                by-products—primarily tree trimmings—into high-value biomass
                fuel. Our mission is to provide industries with a sustainable,
                efficient alternative to traditional fossil fuels.
              </Paragraph>
            </div>
          </div>
        </div>
      </section>

      <div className="core-focus-block">
        <Title level={2} className="core-focus-title">
          Our Core Focus:
        </Title>

        <div className="core-focus-subtitle-row">
          <span className="core-focus-line line-left" />
          <h3 className="core-focus-subtitle">Biomass Energy</h3>
          <span className="core-focus-line line-right" />{" "}
        </div>

        <div className="core-focus-grid">
          <div className="focus-card">
            <div className="focus-card-header">
              <img
                src={fuelProductionIcon}
                alt="Sustainable Fuel Production"
                className="focus-card-icon"
              />
              <h4 className="focus-card-title">Sustainable Fuel Production:</h4>
            </div>

            <p className="focus-card-text">
              We convert locally sourced agricultural waste into processed
              biomass, offering a renewable energy solution that meets the
              demanding needs of high fuel-consuming sectors such as cement,
              manufacturing, and heavy industry.
            </p>
          </div>

          <div className="focus-card">
            <div className="focus-card-header">
              <img
                src={performanceIcon}
                alt="Superior Performance"
                className="focus-card-icon"
              />
              <h4 className="focus-card-title">Superior Performance:</h4>
            </div>

            <p className="focus-card-text">
              RENEW’s biomass is known for its high heat value and low ash
              content, delivering optimal performance while reducing
              environmental impact.
            </p>
          </div>

          <div className="focus-card">
            <div className="focus-card-header">
              <img
                src={supplyIcon}
                alt="Continuous Supply"
                className="focus-card-icon"
              />
              <h4 className="focus-card-title">Continuous Supply:</h4>
            </div>

            <p className="focus-card-text">
              Through a diversified supply network, we ensure reliable,
              year-round delivery, so our partners never have to compromise on
              energy availability.
            </p>
          </div>
        </div>
      </div>

      <div className="why-biomass-block">
        <Title level={2} className="why-biomass-title">
          Why Biomass?
        </Title>

        <div className="why-biomass-icons">
          <div className="why-biomass-icon-circle green">
            <img
              src={cleanEnergyIcon}
              alt="Clean energy"
              className="why-biomass-icon"
            />
          </div>

          <div className="why-biomass-icon-circle gold">
            <img
              src={wasteReductionIcon}
              alt="Waste reduction"
              className="why-biomass-icon"
            />
          </div>

          <div className="why-biomass-icon-circle green">
            <img
              src={environmentIcon}
              alt="Environmental benefits"
              className="why-biomass-icon"
            />
          </div>
        </div>

        <Paragraph className="why-biomass-text">
          Biomass offers a cleaner, renewable alternative to coal and other
          fossil fuels. By redirecting agricultural waste from landfills or open
          burning, we not only help reduce greenhouse gas emissions but also
          address pressing environmental issues—like Egypt’s “black cloud.”
        </Paragraph>
      </div>

      <section className="commitment-section">
        <div className="commitment-container">
          <Title level={2} className="commitment-title">
            Our Commitment:
          </Title>

          <Paragraph className="commitment-text">
            We Are Dedicated To Advancing Egypt&apos;s Energy Landscape By
            Making Sustainable, Alternative Energy Accessible, Reliable, And
            Impactful For Both Industry And The Environment.
          </Paragraph>
        </div>
      </section>

      <section className="impact-section">
        <ImpactSection />
      </section>

      <section className="key-people-section">
        <KeyPeopleSection />
      </section>

      <section>
        <LeadershipSection />
      </section>
    </div>
  );
};

export default AboutSection;
