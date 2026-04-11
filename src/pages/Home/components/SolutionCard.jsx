import { Col, Typography } from "antd";

const { Title } = Typography;

const SolutionCard = ({ title, image }) => (
  <Col xs={24} sm={12} md={8}>
    <div className="solution-card">
      <img src={image} alt={title} className="solution-card-image" />
      <div className="solution-card-overlay" />
      <Title level={4} className="solution-card-title">
        {title}
      </Title>
    </div>
  </Col>
);

export default SolutionCard;