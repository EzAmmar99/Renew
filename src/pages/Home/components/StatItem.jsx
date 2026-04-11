import { Col, Typography } from "antd";

const { Title, Text } = Typography;

const StatItem = ({ value, label }) => (
  <Col xs={24} sm={12} md={6} className="stat-item">
    <Title level={2} className="stat-value">
      {value}
    </Title>
    <Text className="stat-label">{label}</Text>
  </Col>
);

export default StatItem;