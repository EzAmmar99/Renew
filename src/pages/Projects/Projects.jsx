import "./Projects.css";

import implementationImg from "../../assets/successful-implementation.png";
import iconSustainability from "../../assets/icon-sustainability.png";
import iconEfficiency from "../../assets/icon-efficiency.png";
import iconFuel from "../../assets/icon-fuel.png";
import iconAgriWaste from "../../assets/icon-agri-waste.png";
import iconEnergyProduced from "../../assets/icon-energy-produced.png";
import iconTotalEmissions from "../../assets/icon-total-emissions.png";
import iconCoalReplaced from "../../assets/icon-coal-replaced.png";
import iconEmissionReduction from "../../assets/icon-emission-reduction.png";
import biomassBg from "../../assets/Biomass-background.png";
import iconCoalSubstitution from "../../assets/icon-coal-substitution.png";
import iconCompliance from "../../assets/icon-compliance.png";
import iconSupply from "../../assets/icon-supply.png";
import iconReporting from "../../assets/icon-reporting.png";
import cementPattern from "../../assets/watermark.png";

import logoCemex from "../../assets/logo-cemex.png";
import logoArabianCement from "../../assets/logo-arabian-cement.png";
import logoTitan from "../../assets/logo-titan-egypt.png";
import logoLafarge from "../../assets/logo-lafarge.png";
import logoMisr from "../../assets/logo-misr-cement-group.png";
import logoElsewedy from "../../assets/logo-sewedy-cement.png";
import lookingAheadBg from "../../assets/looking-ahead-bg.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <section
        className="projects-implementation-section"
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

      <section className="projects-success-section">
        <div className="projects-success-container">
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

      <section className="projects-partnership-section">
        <div className="projects-partnership-container">
          <div className="projects-partnership-heading">
            <span className="projects-line projects-line--left" />
            <h2>Strategic Industrial Partnerships</h2>
            <span className="projects-line projects-line--right" />
          </div>

          <p className="projects-partnership-text">
            Our Team Has Worked Hand-In-Hand With Top Cement Producers And Heavy
            Fuel Consumers Across Egypt To:
          </p>

          <div className="projects-partnership-grid">
            <div className="projects-partnership-item projects-partnership-item--left">
              <div className="projects-icon">
                <img src={iconSustainability} alt="" />
              </div>
              <p>
                Improve Plant
                <br />
                Sustainability Metrics
              </p>
            </div>

            <div className="projects-partnership-item projects-partnership-item--center">
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

            <div className="projects-partnership-item projects-partnership-item--right">
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

      <section className="projects-results-section">
        {/* <div className="projects-results-panel"> */}
        <h2 className="projects-results-title">Key Results At A Glance</h2>

        <p className="projects-results-subtitle">
          Circular Model Converting Agri-Waste Into Energy → Replacing Coal →
          Reducing Emissions
        </p>

        <div className="projects-results-diagram">
          <div className="projects-results-top-row">
            <div className="projects-result-card projects-result-card--white projects-result-card--agri">
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

            <div className="projects-result-card projects-result-card--main projects-result-card--energy">
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

            <div className="projects-result-card projects-result-card--white projects-result-card--emissions">
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
            <div className="projects-result-card projects-result-card--beige projects-result-card--coal">
              <div className="projects-result-icon projects-result-icon--soft">
                <img src={iconCoalReplaced} alt="" />
              </div>
              <h3 className="projects-result-label">Coal Replaced</h3>
              <p className="projects-result-value">162,000 tons</p>
            </div>

            <div className="projects-result-card projects-result-card--soft-green projects-result-card--reduction">
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

      <section className="projects-impact-section">
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
              <div className="projects-impact-item">
                <div className="projects-impact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 16V9.8C5 9.36 5.14 8.93 5.4 8.58L6.7 6.84C7.08 6.34 7.67 6.04 8.29 6.04H15.71C16.33 6.04 16.92 6.34 17.3 6.84L18.6 8.58C18.86 8.93 19 9.36 19 9.8V16"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 12H20"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="7.5"
                      cy="16.5"
                      r="1.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <circle
                      cx="16.5"
                      cy="16.5"
                      r="1.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </div>
                <h3 className="projects-impact-value">~95,000</h3>
                <p className="projects-impact-text">
                  Passenger Cars
                  <br />
                  Removed From Egyptian
                  <br />
                  Roads
                </p>
              </div>

              <div className="projects-impact-item">
                <div className="projects-impact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 20H20"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 20V10L12 5L18 10V20"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 13H14"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 11V15"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
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

              <div className="projects-impact-item">
                <div className="projects-impact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 18C6.34 18 5 16.66 5 15C5 13.72 5.8 12.63 6.93 12.2C7.11 9.86 9.05 8 11.43 8C12.96 8 14.33 8.77 15.14 9.94C15.44 9.84 15.77 9.79 16.11 9.79C17.88 9.79 19.32 11.23 19.32 13C19.32 14.77 17.88 16.21 16.11 16.21H8Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 18V14"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14 18V12"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="projects-impact-value">~8 Million</h3>
                <p className="projects-impact-text">
                  Trees Planted
                  <br />
                  (Arid-Climate Adjusted)
                </p>
              </div>

              <div className="projects-impact-item">
                <div className="projects-impact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 15V10.5C4 9.67 4.67 9 5.5 9H16.5C17.33 9 18 9.67 18 10.5V15"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 11H20V15H18"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="7.5"
                      cy="16.5"
                      r="1.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <circle
                      cx="14.5"
                      cy="16.5"
                      r="1.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M7 9V6.5H15V9"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="projects-impact-value">~3,800</h3>
                <p className="projects-impact-text">
                  Diesel Buses
                  <br />
                  Taken Out Of Service
                </p>
              </div>

              <div className="projects-impact-item">
                <div className="projects-impact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 19V8.5L14 5V19"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 19H17"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 11H12"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 14H12"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 17H12"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
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

              <div className="projects-impact-item">
                <div className="projects-impact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 15.5C8.66 15.5 10 14.16 10 12.5C10 10.84 8.66 9.5 7 9.5C5.34 9.5 4 10.84 4 12.5C4 14.16 5.34 15.5 7 15.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M14.5 13.5C15.88 13.5 17 12.38 17 11C17 9.62 15.88 8.5 14.5 8.5C13.12 8.5 12 9.62 12 11C12 12.38 13.12 13.5 14.5 13.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M15.5 18.5C16.88 18.5 18 17.38 18 16C18 14.62 16.88 13.5 15.5 13.5C14.12 13.5 13 14.62 13 16C13 17.38 14.12 18.5 15.5 18.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M9.3 13.7L12.1 11.9"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.6 13.3L15.2 13.8"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
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

      <section className="projects-cement-section">
        <img
          src={cementPattern}
          alt=""
          aria-hidden="true"
          className="projects-cement-bg projects-cement-bg--left"
        />

        <img
          src={cementPattern}
          alt=""
          aria-hidden="true"
          className="projects-cement-bg projects-cement-bg--right"
        />

        <div className="projects-cement-container">
          <div className="projects-cement-intro">
            <h2 className="projects-cement-title">
              Cement Sector Collaboration
            </h2>

            <p className="projects-cement-description">
              One Of Our Landmark Partnerships Involved A Multi-Year Supply
              Agreement With A Leading Cement Manufacturer In Egypt.
              <br />
              The Integration Of RENEW Biomass:
            </p>
          </div>

          <div className="projects-cement-slider">
            {/* <button
              className="projects-cement-arrow projects-cement-arrow--prev"
              type="button"
              aria-label="Previous slide"
            >
              ‹ 
            </button> */}

            <div className="projects-cement-cards">
              <article className="projects-cement-card">
                <div className="projects-cement-card-icon">
                  <img src={iconCoalSubstitution} alt="" />
                </div>

                <p className="projects-cement-card-text">
                  Enabled Partial
                  <br />
                  Substitution Of Coal In
                  <br />
                  Kilns
                </p>

                <span className="projects-cement-card-mark" aria-hidden="true">
                  <img src={cementPattern} alt="" />
                </span>
              </article>

              <article className="projects-cement-card">
                <div className="projects-cement-card-icon">
                  <img src={iconCompliance} alt="" />
                </div>

                <p className="projects-cement-card-text">
                  Improved Compliance
                  <br />
                  With Environmental
                  <br />
                  Regulations
                </p>

                <span className="projects-cement-card-mark" aria-hidden="true">
                  <img src={cementPattern} alt="" />
                </span>
              </article>

              <article className="projects-cement-card">
                <div className="projects-cement-card-icon">
                  <img src={iconSupply} alt="" />
                </div>

                <p className="projects-cement-card-text">
                  Provided Uninterrupted
                  <br />
                  Biomass Supply During
                  <br />
                  Fossil Fuel Shortages
                </p>

                <span className="projects-cement-card-mark" aria-hidden="true">
                  <img src={cementPattern} alt="" />
                </span>
              </article>

              <article className="projects-cement-card">
                <div className="projects-cement-card-icon">
                  <img src={iconReporting} alt="" />
                </div>

                <p className="projects-cement-card-text">
                  Enhanced The Client’s
                  <br />
                  Sustainability Reporting
                  <br />
                  Metrics (CO₂ Reduction,
                  <br />
                  Fuel Diversity, ESG
                  <br />
                  Compliance)
                </p>

                <span className="projects-cement-card-mark" aria-hidden="true">
                  <img src={cementPattern} alt="" />
                </span>
              </article>
            </div>

            {/* <button
              className="projects-cement-arrow projects-cement-arrow--next"
              type="button"
              aria-label="Next slide"
            >
              ›
            </button> */}
          </div>
        </div>
      </section>

      <section className="projects-trusted-section">
        <div className="projects-trusted-container">
          <h2 className="projects-trusted-title">
            Trusted By Leading Cement Producers
          </h2>

          <div className="projects-trusted-logos">
            <div className="projects-trusted-logo-item">
              <img src={logoCemex} alt="CEMEX" />
            </div>

            <div className="projects-trusted-logo-item">
              <img src={logoArabianCement} alt="Arabian Cement" />
            </div>

            <div className="projects-trusted-logo-item">
              <img src={logoTitan} alt="Titan Cement Egypt" />
            </div>

            <div className="projects-trusted-logo-item">
              <img src={logoLafarge} alt="Lafarge" />
            </div>

            <div className="projects-trusted-logo-item">
              <img src={logoMisr} alt="Misr Cement Group" />
            </div>

            <div className="projects-trusted-logo-item">
              <img src={logoElsewedy} alt="El Sewedy Cement" />
            </div>
          </div>
        </div>
      </section>

      <section className="projects-looking-section">
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
