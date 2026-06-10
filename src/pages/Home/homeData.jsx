import img1 from "../../assets/Products-1.png";
import img2 from "../../assets/Products-2.png";
import img3 from "../../assets/Products-3.png";
import img4 from "../../assets/Products-4.png";
import img5 from "../../assets/Products-5.png";
import img6 from "../../assets/Products-6.png";

import featureImg1 from "../../assets/feature-1.png";
import featureImg2 from "../../assets/feature-2.png";
import featureImg3 from "../../assets/feature-3.png";
import featureImg4 from "../../assets/feature-4.png";
import featureImg5 from "../../assets/feature-5.png";
import featureImg6 from "../../assets/feature-6.png";


import featureIcon1 from "../../assets/feature-icon-1.png";
import featureIcon2 from "../../assets/feature-icon-2.png";
import featureIcon3 from "../../assets/feature-icon-3.png";
import featureIcon4 from "../../assets/feature-icon-4.png";
import featureIcon5 from "../../assets/feature-icon-5.png";
import featureIcon6 from "../../assets/feature-icon-6.png";

export const pageData = {
  hero: {
    mainTitle: "Innovating A Greener Future",
    subTitle: "With Renewable Solutions",
    description:
      "discover how renew turns agricultural waste into biomass, sustainable materials, and renewable energy. join us in building a cleaner, greener future.",
  },
  stats: [
    { id: 1, value: "Top 5", label: "Cement Factories" },
    { id: 2, value: "+200,000", label: "Tn Supplied" },
    {
      id: 3,
      value: "+ 240,000",
      label: "Tons Of CO₂ Equivalent Replaced",
    },
    { id: 4, value: "2015", label: "Established", disableComma: true },
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
      icon: <img src={featureIcon1} alt="feature icon" />,
      isReversed: true,
    },
    {
      id: "02",
      title: "Superior Biomass Quality",
      description: "High Heat Value, Low Ash—Ideal For Industrial Use.",
      image: featureImg2,
      bgColor: "#4f8f3d",
      icon: <img src={featureIcon2} alt="feature icon" />,
      isReversed: false,
    },
    {
      id: "03",
      title: "Reliable Year-Round Supply",
      description: "Consistent Delivery Through A Diversified Network.",
      image: featureImg3,
      bgColor: "#a8c63f",
      icon: <img src={featureIcon3} alt="feature icon" />,
      isReversed: true,
    },
    {
      id: "04",
      title: "End-To-End Operational Support",
      description: "From Sourcing To Logistics—Handled In-House.",
      image: featureImg4,
      bgColor: "#4f8f3d",
      icon: <img src={featureIcon4} alt="feature icon" />,
      isReversed: false,
    },
    {
      id: "05",
      title: "Smart Commercial Solutions",
      description: "Flexible Contracts Tailored To Your Fuel Needs.",
      image: featureImg5,
      bgColor: "#a8c63f",
      icon: <img src={featureIcon5} alt="feature icon" />,
      isReversed: true,
    },
    {
      id: "06",
      title: "Sustainability At The Core",
      description: "Turning Waste Into Energy, Reducing CO₂ Emissions.",
      image: featureImg6,
      bgColor: "#4f8f3d",
      icon: <img src={featureIcon6} alt="feature icon" />,
      isReversed: false,
    },
  ],
};