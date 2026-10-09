import "./Projects.css";
import { useEffect } from "react";


import implementationImg from "../../assets/successful-implementation.webp";
import iconSustainability from "../../assets/icon-sustainability.webp";
import iconEfficiency from "../../assets/icon-efficiency.webp";
import iconFuel from "../../assets/icon-fuel.webp";
import iconAgriWaste from "../../assets/icon-agri-waste.webp";
import iconEnergyProduced from "../../assets/icon-energy-produced.webp";
import iconTotalEmissions from "../../assets/icon-total-emissions.webp";
import iconCoalReplaced from "../../assets/icon-coal-replaced.webp";
import iconEmissionReduction from "../../assets/icon-emission-reduction.webp";
import biomassBg from "../../assets/Biomass-background.webp";
import iconCoalSubstitution from "../../assets/icon-coal-substitution.webp";
import iconCompliance from "../../assets/icon-compliance.webp";
import iconSupply from "../../assets/icon-supply.webp";
import iconReporting from "../../assets/icon-reporting.webp";
import cementPattern from "../../assets/watermark.webp";

import logoCemex from "../../assets/logo-cemex.webp";
import logoArabianCement from "../../assets/logo-arabian-cement.webp";
import logoTitan from "../../assets/logo-titan-egypt.webp";
import logoLafarge from "../../assets/logo-lafarge.webp";
import logoMisr from "../../assets/logo-misr-cement-group.webp";
import logoElsewedy from "../../assets/logo-sewedy-cement.webp";
import lookingAheadBg from "../../assets/looking-ahead-bg.webp";

import TreesPlanted from "../../assets/TreesPlanted.svg";
import TonsOfCoalAvoided from "../../assets/TonsOfCoalAvoided.svg";
import PassengerCars from "../../assets/PassengerCars.svg";
import OfOneLargeEgyptian from "../../assets/OfOneLargeEgyptian.svg";
import EgyptianHouseholds from "../../assets/EgyptianHouseholds.svg";
import DieselBuses from "../../assets/DieselBuses.svg";

const partnerLogos = [
  { src: logoCemex, alt: "CEMEX" },
  { src: logoArabianCement, alt: "Arabian Cement" },
  { src: logoTitan, alt: "Titan Cement Egypt" },
  { src: logoLafarge, alt: "Lafarge" },
  { src: logoMisr, alt: "Misr Cement Group" },
  { src: logoElsewedy, alt: "El Sewedy Cement" },
];

const doubledLogos = [...partnerLogos, ...partnerLogos];

const Projects = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".projects-reveal");

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
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-container">
      <section
        className="projects-implementation-section projects-reveal is-visible projects-reveal-zoom"
        aria-labelledby="projects-implementation-heading"
      >
        <div className="projects-implementation-media">
          <img
            src={implementationImg}
            alt="Industrial facility implementing biomass solutions"
            className="projects-implementation-image"
          />

          <div className="projects-implementation-overlay" />

          <div className="projects-implementation-content">
            <h2
              id="projects-implementation-heading"
              className="projects-implementation-title"
            >
              Successful Implementation
            </h2>

            <p className="projects-implementation-text">
              Successful Implementation
              <br />
              Starts With Proper Planning
            </p>
          </div>
        </div>
      </section>

      <section className="projects-success-section projects-reveal projects-reveal-up">
        <div className="projects-success-container projects-reveal projects-reveal-zoom">
          <h2 className="projects-success-title">Successful Implementations</h2>

          <p className="projects-success-text">
            At RENEW, Our Impact Is Not Theoretical—It’s Proven. We’ve Partnered
            With Major Cement Factories And Industrial Operators To Integrate
            Our Biomass Solutions Into Their Operations, Delivering Measurable
            Benefits In Performance, Cost Efficiency, And Environmental
            Responsibility
          </p>
        </div>
      </section>

      <section className="projects-partnership-section projects-reveal projects-reveal-up">
        <div className="projects-partnership-container">
          <div className="projects-partnership-heading projects-reveal projects-reveal-zoom">
            <span
              className="projects-line projects-line--left"
              aria-hidden="true"
            >
              <span className="projects-line-dot" />
            </span>

            <h2 className="projects-partnership-title">
              Strategic Industrial Partnerships
            </h2>

            <span
              className="projects-line projects-line--right"
              aria-hidden="true"
            >
              <span className="projects-line-dot" />
            </span>
          </div>
          <p className="projects-partnership-text">
            Our Team Has Worked Hand-In-Hand With Top Cement Producers And Heavy
            Fuel Consumers Across Egypt To:
          </p>

          <div className="projects-partnership-grid">
            <div className="projects-partnership-item projects-partnership-item--left projects-reveal projects-reveal-left">
              <div className="projects-icon">
                <img src={iconSustainability} alt="" />
              </div>
              <p>
                Improve Plant
                <br />
                Sustainability Metrics
              </p>
            </div>

            <div
              className="projects-partnership-item projects-partnership-item--center "
              style={{ "--projects-stagger": 1 }}
            >
              <div className="projects-icon">
                <img src={iconEfficiency} alt="" />
              </div>
              <p>
                Replace A Portion Of Their
                <br />
                Fossil Fuel Use With High-
                <br />
                Calorific Biomass
              </p>
            </div>

            <div
              className="projects-partnership-item projects-partnership-item--right projects-reveal projects-reveal-right"
              style={{ "--projects-stagger": 2 }}
            >
              <div className="projects-icon">
                <img src={iconFuel} alt="" />
              </div>
              <p>
                Optimize Operational
                <br />
                Fuel Mix
              </p>
            </div>
          </div>

          <p className="projects-partnership-footer">
            Through These Partnerships, We Have Helped Redefine What
            Responsible, High-Efficiency Energy Sourcing Looks Like
          </p>
        </div>
      </section>

      <section className="projects-results-section projects-reveal projects-reveal-up">
        <h2 className="projects-results-title">Key Results At A Glance</h2>

        <p className="projects-results-subtitle">
          Circular Model Converting Agri-Waste Into Energy → Replacing Coal →
          Reducing Emissions
        </p>

        <div className="projects-results-diagram">
          <div className="projects-results-top-row">
            <div className="projects-result-card projects-result-card--white projects-result-card--agri projects-reveal projects-reveal-left">
              <div className="projects-result-icon">
                <img src={iconAgriWaste} alt="" />
              </div>
              <h3 className="projects-result-label">Agri Waste</h3>
              <p className="projects-result-value">300,000 tons</p>
            </div>

            <div
              className="projects-result-arrow projects-result-arrow--horizontal"
              aria-hidden
            />

            <div
              className="projects-result-card projects-result-card--main projects-result-card--energy projects-reveal projects-reveal-up"
              style={{ "--projects-stagger": 1 }}
            >
              <div className="projects-result-icon">
                <img src={iconEnergyProduced} alt="" />
              </div>
              <h3 className="projects-result-label">Energy Produced</h3>
              <p className="projects-result-value">405,000 GJ</p>
            </div>

            <div
              className="projects-result-arrow projects-result-arrow--horizontal"
              aria-hidden
            />

            <div
              className="projects-result-card projects-result-card--white projects-result-card--emissions projects-reveal projects-reveal-right"
              style={{ "--projects-stagger": 2 }}
            >
              <div className="projects-result-icon">
                <img src={iconTotalEmissions} alt="" />
              </div>
              <h3 className="projects-result-label">Total emissions</h3>
              <p className="projects-result-value">72,000 T CO₂</p>
            </div>
          </div>

          <div className="projects-results-down-arrows" aria-hidden>
            <span className="projects-result-arrow projects-result-arrow--vertical" />
            <span className="projects-result-arrow projects-result-arrow--vertical" />
          </div>

          <div className="projects-results-bottom-row">
            <div className="projects-result-card projects-result-card--beige projects-result-card--coal projects-reveal projects-reveal-left">
              <div className="projects-result-icon projects-result-icon--soft">
                <img src={iconCoalReplaced} alt="" />
              </div>
              <h3 className="projects-result-label">Coal Replaced</h3>
              <p className="projects-result-value">162,000 tons</p>
            </div>

            <div
              className="projects-result-card projects-result-card--soft-green projects-result-card--reduction projects-reveal projects-reveal-right"
              style={{ "--projects-stagger": 1 }}
            >
              <div className="projects-result-icon projects-result-icon--soft">
                <img src={iconEmissionReduction} alt="" />
              </div>
              <h3 className="projects-result-label">Emission Reduction</h3>
              <p className="projects-result-value">316,800 T CO₂</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section className="projects-impact-section projects-reveal projects-reveal-zoom">
        <div className="projects-impact-media">
          <img
            src={biomassBg}
            alt="Equivalent climate impact in Egypt"
            className="projects-impact-image"
          />

          <div className="projects-impact-overlay" />

          <div className="projects-impact-container">
            <h2 className="projects-impact-title">
              Equivalent Climate Impact In Egypt
            </h2>

            <div className="projects-impact-line" />

            <p className="projects-impact-sub">
              <span>CO₂ Avoided:</span> 316,800 TCO₂ (Cumulative Since 2015)
              <br />
              <span>Emission Reduction:</span> -81.5% For The Same Energy Output
            </p>

            <div className="projects-impact-grid">
              <div className="projects-impact-item projects-reveal projects-reveal-up">
                <div className="projects-impact-icon" aria-hidden="true">
                  <img src={PassengerCars} alt="" />
                </div>
                <h3 className="projects-impact-value">~95,000</h3>
                <p className="projects-impact-text">
                  <strong>Passenger Cars</strong>
                  <br />
                  Removed From Egyptian
                  <br />
                  Roads
                </p>
              </div>

              <div
                className="projects-impact-item projects-reveal projects-reveal-up"
                style={{ "--projects-stagger": 1 }}
              >
                <div className="projects-impact-icon" aria-hidden="true">
                  <img src={EgyptianHouseholds} alt="" />
                </div>
                <h3 className="projects-impact-value">~140,000</h3>
                <p className="projects-impact-text">
                  Egyptian Households'
                  <br />
                  Electricity Emissions
                  <br />
                  Avoided
                </p>
              </div>

              <div
                className="projects-impact-item projects-reveal projects-reveal-up"
                style={{ "--projects-stagger": 2 }}
              >
                <div className="projects-impact-icon" aria-hidden="true">
                  <img src={TreesPlanted} alt="" />
                </div>
                <h3 className="projects-impact-value">~8 Million</h3>
                <p className="projects-impact-text">
                  Trees Planted
                  <br />
                  (Arid-Climate Adjusted)
                </p>
              </div>

              <div
                className="projects-impact-item projects-reveal projects-reveal-up"
                style={{ "--projects-stagger": 3 }}
              >
                <div className="projects-impact-icon" aria-hidden="true">
                  <img src={DieselBuses} alt="" />
                </div>
                <h3 className="projects-impact-value">~3,800</h3>
                <p className="projects-impact-text">
                  Diesel Buses
                  <br />
                  Taken Out Of Service
                </p>
              </div>

              <div
                className="projects-impact-item projects-reveal projects-reveal-up"
                style={{ "--projects-stagger": 4 }}
              >
                <div className="projects-impact-icon" aria-hidden="true">
                  <img src={OfOneLargeEgyptian} alt="" />
                </div>
                <h3 className="projects-impact-value">~5-10%</h3>
                <p className="projects-impact-text">
                  Of One Large Egyptian
                  <br />
                  Cement Kiln's Annual
                  <br />
                  CO2 Emissions Offset
                </p>
              </div>

              <div
                className="projects-impact-item projects-reveal projects-reveal-up"
                style={{ "--projects-stagger": 5 }}
              >
                <div className="projects-impact-icon" aria-hidden="true">
                  <img src={TonsOfCoalAvoided} alt="" />
                </div>
                <h3 className="projects-impact-value">162,000</h3>
                <p className="projects-impact-text">
                  Tons Of Coal Avoided
                  <br />
                  (Full Fuel Replacement For
                  <br />
                  One Mid-Size Cement Plant)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-cement-section projects-reveal projects-reveal-up">
        {/* الووتر مارك الرئيسية في خلفية السكشن */}
        <img
          src={cementPattern}
          alt=""
          aria-hidden="true"
          className="cement-bg-watermark bg-top-left"
        />
        <img
          src={cementPattern}
          alt=""
          aria-hidden="true"
          className="cement-bg-watermark bg-mid-right"
        />

        <div className="projects-cement-container">
          {/* الصندوق العلوي */}
          <div className="projects-cement-intro projects-reveal projects-reveal-zoom">
            <h2 className="projects-cement-title">
              Cement Sector Collaboration
            </h2>
            <p className="projects-cement-description">
              One Of Our Landmark Partnerships Involved A Multi-Year Supply
              Agreement With A Leading Cement Manufacturer In Egypt.
              <br />
              <span>The Integration Of RENEW Biomass:</span>
            </p>
          </div>

          <div className="projects-cement-cards-wrapper">
            <div className="projects-cement-cards">
              {/* Card 1 */}
              <article className="projects-cement-card projects-reveal projects-reveal-up">
                <div className="projects-cement-card-icon">
                  <img src={iconCoalSubstitution} alt="Coal Substitution" />
                </div>
                <p className="projects-cement-card-text">
                  Enabled Partial Substitution Of Coal In Kilns
                </p>
                {/* الووتر مارك داخل الكارد */}
                <img
                  src={cementPattern}
                  className="card-watermark"
                  alt=""
                  aria-hidden="true"
                />
              </article>

              {/* Card 2 */}
              <article
                className="projects-cement-card projects-reveal projects-reveal-up"
                style={{ "--projects-stagger": 1 }}
              >
                <div className="projects-cement-card-icon">
                  <img src={iconCompliance} alt="Compliance" />
                </div>
                <p className="projects-cement-card-text">
                  Improved Compliance With Environmental Regulations
                </p>
                <img
                  src={cementPattern}
                  className="card-watermark"
                  alt=""
                  aria-hidden="true"
                />
              </article>

              {/* Card 3 */}
              <article
                className="projects-cement-card projects-reveal projects-reveal-up"
                style={{ "--projects-stagger": 2 }}
              >
                <div className="projects-cement-card-icon">
                  <img src={iconSupply} alt="Supply" />
                </div>
                <p className="projects-cement-card-text">
                  Provided Uninterrupted Biomass Supply During Fossil Fuel
                  Shortages
                </p>
                <img
                  src={cementPattern}
                  className="card-watermark"
                  alt=""
                  aria-hidden="true"
                />
              </article>

              {/* Card 4 */}
              <article
                className="projects-cement-card projects-reveal projects-reveal-up"
                style={{ "--projects-stagger": 3 }}
              >
                <div className="projects-cement-card-icon">
                  <img src={iconReporting} alt="Reporting" />
                </div>
                <p className="projects-cement-card-text">
                  Enhanced The Client’s Sustainability Reporting Metrics (CO₂
                  Reduction, Fuel Diversity, ESG Compliance)
                </p>
                <img
                  src={cementPattern}
                  className="card-watermark"
                  alt=""
                  aria-hidden="true"
                />
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-trusted-section projects-reveal projects-reveal-up">
        <div className="projects-trusted-container">
          <h2 className="projects-trusted-title">
            Trusted By Leading Cement Producers
          </h2>

          <div className="projects-trusted-slider-wrapper">
            <div className="projects-trusted-logos-track">
              {doubledLogos.map((logo, index) => (
                <div key={index} className="projects-trusted-logo-item">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="projects-looking-section projects-reveal projects-reveal-zoom" style={{ marginBottom: "-10rem" }}>
        <div className="projects-looking-media">
          <img
            src={lookingAheadBg}
            alt="Egyptian industrial and agricultural landscape"
            className="projects-looking-image"
          />

          <div className="projects-looking-bottom-fade" />

          <div className="projects-looking-container">
            <div className="projects-looking-card">
              <h2 className="projects-looking-title">Looking Ahead</h2>

              <p className="projects-looking-text">
                As Egypt Moves Toward A Greener Energy Future, RENEW Is Proud To
                Serve As A Trusted Implementation Partner For Industries Seeking
                To Reduce Costs While Increasing Environmental Performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
