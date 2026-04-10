import { Layout, Typography, Row, Col, Space, Divider } from "antd";
import {
  XOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const Footerr = () => {
  return (
    <Footer
      style={{
        background: "#437134",
        padding: "50px 10% 20px",
        color: "#fff",
      }}
    >
      <Row justify="space-between">
        <Col xs={24} md={8}>
          <Title level={2} style={{ color: "#fff", margin: 0 }}>
            RENEW 🌿
          </Title>
          <Paragraph style={{ color: "rgba(255,255,255,0.7)", marginTop: 20 }}>
            Transforming agricultural waste into sustainable energy for a
            cleaner future.
          </Paragraph>
        </Col>

        <Col xs={24} md={14} style={{ textAlign: "right" }}>
          <Space
            size="large"
            style={{
              marginBottom: 40,
              display: "flex",
              justifyContent: "flex-end",
              flexWrap: "wrap",
            }}
          >
            {["Home", "About US", "Solutions", "Projects", "Contact US"].map(
              (item) => (
                <Text
                  key={item}
                  style={{
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Text>
              ),
            )}
          </Space>
          <div style={{ marginTop: 20 }}>
            <Text
              style={{
                color: "#fff",
                display: "block",
                marginBottom: 15,
              }}
            >
              Follow US
            </Text>
            <Space size="middle">
              <XOutlined style={{ fontSize: 20 }} />
              <FacebookOutlined style={{ fontSize: 20 }} />
              <InstagramOutlined style={{ fontSize: 20 }} />
              <LinkedinOutlined style={{ fontSize: 20 }} />
              <YoutubeOutlined style={{ fontSize: 20 }} />
            </Space>
          </div>
        </Col>
      </Row>

      <Divider
        style={{ borderColor: "rgba(255,255,255,0.1)", margin: "40px 0" }}
      />
      <Text style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
        Copyright 2026
      </Text>
    </Footer>
  );
};

export default Footerr;
