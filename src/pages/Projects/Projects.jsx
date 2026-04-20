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
    </div>
  );
};

export default Projects;
