import "./Solutions.css";
import heroImage from "../../assets/Hero-Solutions.png";
import iconFlame from "../../assets/IconFlame.png";
import iconCleanContaminant from "../../assets/Clean-Contaminant.png";
import iconClean from "../../assets/Clean.png";
import iconEconomical from "../../assets/Economical.png";
import iconSustainable from "../../assets/Sustainable.png";
import iconReduced from "../../assets/Reduced.png";
import watermarkImg from "../../assets/watermark.png";

const biomassApartCards = [
  {
    id: "calorific",
    title: "Efficient & High In Calorific Value",
    iconSrc: iconFlame,
    iconAlt: "High calorific value",
    body: (
      <>
        With One Of The{" "}
        <strong>Highest Heat Values Among Agricultural Waste Fuels</strong>,
        Our Biomass Guarantees Consistent Performance, Helping Clients Optimize
        Fuel Usage.
      </>
    ),
  },
  {
    id: "clean",
    title: "Clean & Contaminant-Free",
    iconSrc: iconCleanContaminant,
    iconAlt: "Clean and contaminant-free fuel",
    body: (
      <>
        Our Biomass Is Free Of Hazardous Impurities And Burns With{" "}
        <strong>Exceptionally Low Ash Content</strong>, Ensuring Smooth
        Operation And Minimal Maintenance For Industrial Systems.
      </>
    ),
  },
  {
    id: "economical",
    title: "Economical Alternative",
    iconSrc: iconEconomical,
    iconAlt: "Economical energy alternative",
    body: (
      <>
        RENEW Biomass Is{" "}
        <strong>Cost-Competitive With Fossil Fuels</strong>, Allowing
        Industries To Reduce Their Energy Costs While Advancing Their
        Environmental Commitments.
      </>
    ),
  },
  {
    id: "sustainable",
    title: "Sustainable & Abundant",
    iconSrc: iconSustainable,
    iconAlt: "Sustainable circular supply",
    body: (
      <>
        Sourced From Renewable Tree Trimmings, Our Product Supports{" "}
        <strong>A Circular Economy</strong>, Turning Organic Waste Into Usable
        Energy—Available In Stable Supply Throughout The Year.
      </>
    ),
  },
  {
    id: "emissions",
    title: "Lower CO₂ Emissions",
    iconSrc: iconClean,
    iconAlt: "Lower emissions and climate impact",
    body: (
      <>
        Choosing RENEW&apos;s Biomass Contributes To{" "}
        <strong>Lower CO2 Emissions</strong>, Directly Supporting National And
        Global Climate Objectives.
      </>
    ),
  },
  {
    id: "risk",
    title: "Reduced Risk",
    iconSrc: iconReduced,
    iconAlt: "Stable supply and reduced risk",
    body: (
      <>
        Unlike Fossil Fuels Prone To Global Supply Fluctuations, Our Locally
        Sourced Biomass Offers{" "}
        <strong>Stable Availability And Dependable Logistics</strong>, Helping
        Industries Reduce Fuel Outage Risks.
      </>
    ),
  },
];

const Solutions = () => {
  return (
    <div className="solutions-container">
      <section className="solutions-section">
        <div className="solutions-image-wrapper">
          <img
            src={heroImage}
            alt="Turning waste into clean sustainable energy"
            className="solutions-image"
          />
          <div className="solutions-overlay"></div>

          <div className="solutions-content">
            <h2 className="solutions-title">Solutions</h2>
            <p className="solutions-text">
              Turning Waste Into Clean,
              <br />
              Sustainable Energy
            </p>
          </div>
        </div>
      </section>

      <section className="biomass-section">
        <div className="biomass-container">
          <h2 className="biomass-title">Our Biomass Products</h2>

          <p className="biomass-text">
            At RENEW, we supply high-performance{" "}
            <span className="highlight">Processed Biomass Fuel</span>, derived
            from clean agricultural waste—primarily tree trimmings. Designed for
            energy-intensive industries, our product offers a smarter, cleaner
            alternative to fossil fuels.
          </p>
        </div>
      </section>

      <section className="biomass-apart-section" aria-labelledby="biomass-apart-heading">
        <div className="biomass-apart-section-watermark" aria-hidden>
          <img
            src={watermarkImg}
            alt=""
            className="biomass-apart-section-watermark-img"
            decoding="async"
          />
        </div>
        <div className="biomass-apart-inner">
          <div className="biomass-apart-heading">
            <span
              className="biomass-apart-heading-line biomass-apart-heading-line--left"
              aria-hidden
            />
            <span className="biomass-apart-heading-dot" aria-hidden />
            <h2 className="biomass-apart-title" id="biomass-apart-heading">
              What Sets Our Biomass Apart
            </h2>
            <span className="biomass-apart-heading-dot" aria-hidden />
            <span
              className="biomass-apart-heading-line biomass-apart-heading-line--right"
              aria-hidden
            />
          </div>

          <ul className="biomass-apart-grid">
            {biomassApartCards.map(({ id, title, iconSrc, iconAlt, body }) => (
              <li key={id} className="biomass-apart-card">
                <div className="biomass-apart-card-watermark" aria-hidden>
                  <img
                    src={watermarkImg}
                    alt=""
                    className="biomass-apart-watermark-img"
                    decoding="async"
                  />
                </div>
                <div className="biomass-apart-icon-badge">
                  <img
                    src={iconSrc}
                    alt={iconAlt}
                    className="biomass-apart-icon-img"
                    decoding="async"
                  />
                </div>
                <h3 className="biomass-apart-card-title">{title}</h3>
                <p className="biomass-apart-card-body">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
