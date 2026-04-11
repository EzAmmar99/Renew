import { Button, Typography, Row, Col } from "antd";
import { SendOutlined } from "@ant-design/icons";
import teamContactImg from "../../../assets/teamContact.png";

const { Title, Paragraph } = Typography;

const HomeContactSection = () => {
  return (
    <div className="home-contact-section">
      <div className="home-contact-header">
        <Title level={2} className="home-contact-title">
          Ready To Power Your Industry With Clean Energy?
        </Title>

        <Paragraph className="home-contact-description">
          Whether You're Looking To Reduce Fuel Costs, Improve Sustainability,
          Or Explore Reliable Biomass Solutions—RENEW Is Here To Help.
        </Paragraph>
      </div>

      <Row gutter={[60, 40]} align="middle">
        <Col xs={24} md={11}>
          <Title level={3} className="home-contact-text">
            Our Team Is Ready To Answer Your Questions And Explore How We Can
            Support Your Energy Needs.
          </Title>

          <Button
            type="primary"
            icon={<SendOutlined rotate={-45} />}
            className="home-contact-button"
          >
            Let’s Talk
          </Button>
        </Col>

        <Col xs={24} md={13}>
          <div className="home-contact-image-wrapper">
            <div className="home-contact-image-frame" />
            <img
              src={teamContactImg}
              alt="Team contact"
              className="home-contact-image"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeContactSection;