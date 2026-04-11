import { Typography, Row } from "antd";
import { pageData } from "../homeData";
import SolutionCard from "./SolutionCard";

const { Title, Paragraph } = Typography;

const HomeSolutionsSection = () => {
  return (
    <>
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
    </>
  );
};

export default HomeSolutionsSection;
