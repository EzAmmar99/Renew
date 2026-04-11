import { Typography, Row } from "antd";
import { pageData } from "../homeData";
import SolutionCard from "./SolutionCard";
import FeatureRow from "./FeatureRow";

const { Title, Paragraph } = Typography;

const HomeFeaturesSection = () => {
  return (
    <>
      {/* <div className="home-solutions-section">
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
      </div> */}

      <div className="home-features-section">
        {pageData.features.map((item) => (
          <FeatureRow key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default HomeFeaturesSection;
