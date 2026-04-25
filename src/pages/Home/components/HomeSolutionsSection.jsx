import { Typography, Row, Col } from "antd";
import { pageData } from "../homeData";
import SolutionCard from "./SolutionCard";

const { Title, Paragraph } = Typography;

const HomeSolutionsSection = () => {
  return (
    <>
      <div className="home-solutions-section reveal-on-scroll reveal-up">
        <Title
          level={2}
          className="home-solutions-title reveal-on-scroll reveal-left"
        >
          Key Products & Solutions
        </Title>

        <Paragraph className="home-solutions-description reveal-on-scroll reveal-right">
          Comprehensive End-To-End Technology Solutions For All Types Of Organic
          Waste
        </Paragraph>

        <Row gutter={[48, 48]} className="home-solutions-row" justify="center">
          {pageData.solutions.map((sol, index) => (
            <Col xs={24} sm={12} md={8} key={sol.id}>
              <SolutionCard title={sol.title} image={sol.image} index={index} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default HomeSolutionsSection;
