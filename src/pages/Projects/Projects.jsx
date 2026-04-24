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
                  <svg width="54" height="35" viewBox="0 0 54 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.1829 9.88066C47.2927 9.88066 48.3306 9.85069 49.3582 9.89065C50.1597 9.92062 50.9613 9.99056 51.7526 10.1404C53.1501 10.4002 53.6742 11.1195 53.592 12.5282C53.5714 12.8279 53.52 13.1176 53.4687 13.4173C53.3556 14.1466 52.9651 14.6562 52.2047 14.846C51.4237 15.0358 50.6427 15.1956 49.7693 15.3955C50.0775 15.6752 50.3242 15.9549 50.6222 16.1747C52.0197 17.2237 52.5027 18.6724 52.5233 20.3108C52.5438 21.7694 52.4924 23.2181 52.5233 24.6767C52.5541 26.1952 52.215 27.564 50.9407 28.613C50.9407 29.582 50.9613 30.5511 50.9407 31.5202C50.8996 33.3984 49.9337 34.3276 48.012 34.3475C46.707 34.3575 45.4019 34.3675 44.0968 34.3575C42.0827 34.3376 40.9934 33.2686 40.9626 31.3004C40.9523 30.7809 40.9626 30.2714 40.9626 29.612C31.375 29.592 21.8901 29.592 12.2613 29.622C12.2613 30.3513 12.2819 30.9807 12.2613 31.6001C12.21 33.2586 11.1618 34.2976 9.4354 34.3475C8.08923 34.3875 6.75333 34.3775 5.40716 34.3475C3.66021 34.3076 2.70453 33.4784 2.54011 31.77C2.43735 30.7409 2.51956 29.6919 2.51956 28.8827C1.9441 28.0835 1.43029 27.524 1.11173 26.8746C0.875379 26.3951 0.823998 25.7956 0.813722 25.2461C0.79317 23.3479 0.813722 21.4497 0.834274 19.5515C0.854826 18.2727 1.54333 17.2937 2.40652 16.4145C2.74564 16.0648 3.12585 15.7551 3.49579 15.4154C2.81757 15.2756 2.14962 15.1657 1.49195 14.9958C0.721237 14.796 0.197153 14.3165 0.104668 13.5272C0.0224589 12.8279 -0.00836895 12.1185 0.00190719 11.4092C0.0224595 10.7698 0.464333 10.3902 1.05007 10.2203C1.56388 10.0805 2.09824 9.98057 2.62232 9.94061C3.578 9.88066 4.54396 9.88066 5.49964 9.8407C5.9929 9.82072 6.48615 9.76078 7.02051 9.72081C7.35962 9.06144 7.66791 8.43203 8.00702 7.81262C8.87021 6.23411 9.69231 4.62563 10.6583 3.10706C11.7064 1.45862 13.2479 0.609425 15.3031 0.439585C19.6293 0.0699344 23.9556 0.00999056 28.2818 0C31.5805 0 34.8689 0.229784 38.1469 0.539491C39.8322 0.69934 41.2401 1.41866 42.1238 2.87728C43.0487 4.41583 43.9427 5.98434 44.847 7.54287C45.2889 8.27218 45.6999 9.03146 46.1829 9.88066ZM8.57221 14.2765C10.2061 14.4763 43.5111 14.4264 44.3948 14.2166C43.7063 12.8279 43.0384 11.4492 42.3499 10.0905C41.3531 8.12232 40.3358 6.16418 39.339 4.19604C39.0204 3.57662 38.5683 3.23694 37.8181 3.19698C35.8348 3.09707 33.8515 2.88727 31.8579 2.80735C27.0693 2.62752 22.2806 2.70744 17.4919 2.99717C16.4643 3.05711 15.4367 3.18699 14.3166 3.28689C12.1483 6.79358 10.4836 10.58 8.57221 14.2765ZM26.2985 19.1219C25.8361 19.1119 25.3737 19.1119 24.9215 19.1119C22.8149 19.1319 20.7083 19.1519 18.6017 19.1919C17.348 19.2118 16.7828 19.8413 16.8856 21.0401C16.9164 21.4098 16.9781 21.7794 17.0809 22.1391C17.3275 22.9983 17.9029 23.5777 18.8175 23.7376C19.4957 23.8575 20.1842 23.9274 20.8625 23.9374C24.8907 23.9574 28.919 23.9574 32.9472 23.9374C33.5535 23.9374 34.1701 23.8475 34.7558 23.7176C35.3724 23.5777 35.8554 23.2081 36.1431 22.6386C36.4925 21.9493 36.6055 21.2199 36.5541 20.4707C36.513 19.8812 36.0814 19.4216 35.4751 19.3317C34.7558 19.2318 34.0262 19.1419 33.3069 19.1319C30.9845 19.1119 28.6415 19.1219 26.2985 19.1219ZM44.066 18.8622C44.066 18.8522 44.066 18.8322 44.066 18.8222C43.1514 18.8222 42.2266 18.7922 41.312 18.8322C40.3152 18.8722 39.7295 19.3917 39.6575 20.3308C39.6062 21.0301 39.6062 21.7494 39.6575 22.4488C39.7089 23.2081 40.1302 23.6576 40.9112 23.8375C41.2401 23.9174 41.5894 23.9274 41.9286 23.9274C43.3775 23.9374 44.8264 23.9274 46.2754 23.9274C46.6967 23.9274 47.118 23.9474 47.5393 23.9274C48.9163 23.8774 49.6562 23.1681 49.6973 21.8394C49.7076 21.3898 49.7076 20.9502 49.687 20.5006C49.6357 19.2318 48.9472 18.6324 47.6113 18.7023C46.4295 18.7623 45.2478 18.8122 44.066 18.8622ZM8.73663 23.8275C8.73663 23.8575 8.73663 23.8874 8.73663 23.9174C9.80534 23.9174 10.8843 23.9074 11.9531 23.9174C13.0732 23.9274 13.7617 23.318 13.7925 22.219C13.813 21.5896 13.813 20.9502 13.7719 20.3208C13.7206 19.4216 13.2787 18.9621 12.3641 18.8522C12.025 18.8122 11.6756 18.8222 11.3365 18.8222C9.49706 18.7823 7.65763 18.7523 5.8182 18.7023C4.73921 18.6724 3.94794 19.2418 3.7938 20.2808C3.70132 20.8603 3.71159 21.4797 3.78353 22.0592C3.95822 23.328 4.52341 23.7975 5.85931 23.8275C6.81499 23.8475 7.78094 23.8275 8.73663 23.8275ZM43.8091 31.9998C45.3505 31.9998 46.7892 31.9998 48.2587 31.9998C48.7416 31.1406 48.5464 30.3114 48.5053 29.4721C46.7994 29.4721 45.1655 29.4721 43.47 29.4721C43.398 30.3713 43.0692 31.2105 43.8091 31.9998ZM4.86252 31.6901C5.06804 31.8099 5.22219 31.9798 5.3866 31.9898C6.64029 32.0197 7.90426 32.0397 9.15795 31.9998C9.55872 31.9898 9.87728 31.6901 9.88755 31.2704C9.9081 30.661 9.867 30.0516 9.84645 29.4622C8.10978 29.4622 6.51698 29.4622 4.86252 29.4622C4.86252 30.2414 4.86252 30.9607 4.86252 31.6901ZM51.434 12.688C50.1084 12.2185 48.9266 12.4582 47.5804 12.4183C47.899 12.9378 48.1045 13.2775 48.3306 13.6571C49.3377 13.3074 50.4783 13.737 51.434 12.688ZM4.79059 13.6171C5.02694 13.2175 5.24274 12.8678 5.48937 12.4582C3.21834 12.3283 2.83812 12.3583 2.07769 12.738C2.77646 13.6571 3.85546 13.3274 4.79059 13.6171Z" fill="white" />
                  </svg>

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
          <div className="projects-cement-intro">
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
              <article className="projects-cement-card">
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
              <article className="projects-cement-card">
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
              <article className="projects-cement-card">
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
              <article className="projects-cement-card">
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

      <section className="projects-trusted-section">
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
