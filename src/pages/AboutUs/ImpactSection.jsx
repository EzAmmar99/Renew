import React from "react";
import { Row, Col, Card, Typography, Divider } from "antd";
import {
  CloudOutlined,
  ThunderboltOutlined,
  SyncOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const ImpactSection = () => {
  const environmentalData = [
    {
      title: "Reducing Emissions",
      icon: <CloudOutlined style={{ fontSize: "32px", color: "#3f6634" }} />,
      desc: "By Replacing Fossil Fuels With Clean-Burning Biomass, We Help Cut Down Harmful Greenhouse Gas Emissions And Reduce The Environmental Footprint Of Heavy Industries.",
    },
    {
      title: "Combating The 'Black Cloud'",
      icon: <GlobalOutlined style={{ fontSize: "32px", color: "#3f6634" }} />,
      desc: "Agricultural Waste Is Often Burned Openly, Contributing To Egypt's Seasonal Air Pollution Crisis. RENEW Intercepts This Waste, Transforming It Into Clean Energy And Reducing Airborne Pollutants.",
    },
    {
      title: "Closing The Loop On Waste",
      icon: <SyncOutlined style={{ fontSize: "32px", color: "#3f6634" }} />,
      desc: "We Turn What Was Once A Disposal Challenge—Tree Trimmings And Agricultural Residue—Into A Valuable Resource, Promoting A Circular Economy Model Rooted In Sustainability.",
    },
  ];

  const industrialData = [
    {
      title: "Reliable Alternative Fuel",
      icon: (
        <SafetyCertificateOutlined
          style={{ fontSize: "32px", color: "#3f6634" }}
        />
      ),
      desc: "Our High-Quality Biomass Provides Consistent, High Heat Output With Low Ash Content, Making It A Reliable Substitute For Coal In Energy-Intensive Operations.",
    },
    {
      title: "Year-Round Supply Security",
      icon: (
        <ThunderboltOutlined style={{ fontSize: "32px", color: "#3f6634" }} />
      ),
      desc: "Through Our Extensive Network Of Suppliers And Streamlined Logistics, We Ensure Uninterrupted Fuel Delivery, Helping Clients Maintain Operational Continuity And Cost Efficiency.",
    },
    {
      title: "Energy Cost Optimization",
      icon: <DollarOutlined style={{ fontSize: "32px", color: "#3f6634" }} />,
      desc: "Clients Benefit From A Cost-Effective Energy Source That Aligns With Both Regulatory Standards And Environmental Goals.",
    },
  ];

  const renderCards = (data) => (
    <Row gutter={[32, 32]} justify="center">
      {data.map((item, index) => (
        <Col key={index}>
          <Card
            hoverable
            style={{
              width: "100%", // نغير العرض ليكون مرناً
              maxWidth: "470px", // ونضع العرض الأصلي كحد أقصى
              minHeight: "351px", // نغير height إلى minHeight
              height: "auto", // نسمح للارتفاع بالتمدد التلقائي

              opacity: 1,
              backgroundColor: "#4B823C33", // شفافية 20% تقريباً حسب الكود الخاص بك
              borderTopLeftRadius: "30px",
              borderBottomRightRadius: "30px",
              borderTopRightRadius: "0px",
              borderBottomLeftRadius: "0px",
              border: "none",

              // محاذاة المحتوى داخلياً
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px", // زيادة البادينج قليلاً لتناسب الأحجام الجديدة
              textAlign: "center",
            }}
          >
            {/* الأيقونة */}
            <div style={{ marginBottom: "20px" }}>{item.icon}</div>

            {/* التايتل (Title) */}
            <Title
              style={{
                fontFamily: "'Alexandria', sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "150%",
                letterSpacing: "0%",
                textTransform: "capitalize",
                textAlign: "center",
                color: "#22381C",
                marginBottom: "12px",
              }}
            >
              {item.title}
            </Title>

            {/* الوصف (Description) */}
            <Paragraph
              style={{
                fontFamily: "'Alexandria', sans-serif",
                fontWeight: 300,
                fontSize: "20px",
                lineHeight: "150%",
                letterSpacing: "0%",
                textTransform: "capitalize",
                textAlign: "center",
                color: "#22381C",
                margin: 0,
              }}
            >
              {item.desc}
            </Paragraph>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <div
      style={{
        padding: "50px 5%",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      {/* Header Section */}
      <Divider style={{ borderColor: "#fadb14" }}>
        <Title
          level={2}
          style={{
            margin: 0,
            color: "#22381C",
            fontWeight: 700,
            fontSize: "40px",
          }}
        >
          Our Impact
        </Title>
      </Divider>

      <Paragraph
        style={{
          maxWidth: "1000px",
          margin: "20px auto 50px",
          fontSize: "24px",
          color: "#737373",
          fontWeight: 400,
          lineHeight: "1.5",
        }}
      >
        At RENEW, Our Commitment Goes Beyond Providing Alternative Fuel—We're
        Actively Reshaping Egypt's Energy And Environmental Landscape.
      </Paragraph>

      {/* Environmental Section */}
      <Title
        style={{
          color: "#FEC858",
          marginBottom: "30px",
          fontSize: "25px",
          fontWeight: 700,
        }}
      >
        Environmental Benefits
      </Title>
      {renderCards(environmentalData)}

      {/* Industrial Section */}
      <Title
        style={{
          color: "#FEC858",
          marginTop: "60px",
          marginBottom: "30px",
          fontSize: "25px",
          fontWeight: 700,
        }}
      >
        Industrial Benefits
      </Title>
      {renderCards(industrialData)}
    </div>
  );
};

export default ImpactSection;
