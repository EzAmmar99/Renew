import { Typography, Row, Col } from "antd";
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

        <Row gutter={[24, 32]} className="home-solutions-row" justify="center">
          {pageData.solutions.map((sol) => (
            <Col xs={24} sm={12} md={8} key={sol.id}>
              <SolutionCard title={sol.title} image={sol.image} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default HomeSolutionsSection;
