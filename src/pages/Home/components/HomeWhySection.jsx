import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const HomeWhySection = () => {
  return (
    <div className="home-why-section">
      <div className="home-why-header">
        <div className="home-why-title-row">
          <div className="home-why-line home-why-line-left">
            <span className="home-why-dot home-why-dot-right" />
          </div>

          <Title level={2} className="home-why-title">
            Why Choose Us
          </Title>

          <div className="home-why-line home-why-line-right">
            <span className="home-why-dot home-why-dot-left" />
          </div>
        </div>

        <Paragraph className="home-why-description">
          At RENEW, We Are Committed To Creating A Sustainable Future By
          Transforming Agricultural Waste Into Valuable Energy Solutions.
          Here's Why You Can Trust Us To Lead The Way:
        </Paragraph>
      </div>
    </div>
  );
};

export default HomeWhySection;