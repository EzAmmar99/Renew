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

import "./ImpactSection.css";

import impactIcon1 from "../../assets/impact-icon-1.png";
import impactIcon2 from "../../assets/impact-icon-2.png";
import impactIcon3 from "../../assets/impact-icon-3.png";
import impactIcon4 from "../../assets/impact-icon-4.png";
import impactIcon5 from "../../assets/impact-icon-5.png";
import impactIcon6 from "../../assets/impact-icon-6.png";



const ImpactSection = () => {
  const environmentalData = [
    {
      title: "Reducing Emissions",
      icon: <img src={impactIcon1} alt="impact icon" />,
      desc: "By Replacing Fossil Fuels With Clean-Burning Biomass, We Help Cut Down Harmful Greenhouse Gas Emissions And Reduce The Environmental Footprint Of Heavy Industries.",
    },
    {
      title: "Combating The 'Black Cloud'",
      icon: <img src={impactIcon2} alt="impact icon" />,
      desc: "Agricultural Waste Is Often Burned Openly, Contributing To Egypt's Seasonal Air Pollution Crisis. RENEW Intercepts This Waste, Transforming It Into Clean Energy And Reducing Airborne Pollutants.",
    },
    {
      title: "Closing The Loop On Waste",
      icon: <img src={impactIcon3} alt="impact icon" />,
      desc: "We Turn What Was Once A Disposal Challenge—Tree Trimmings And Agricultural Residue—Into A Valuable Resource, Promoting A Circular Economy Model Rooted In Sustainability.",
    },
  ];

  const industrialData = [
    {
      title: "Reliable Alternative Fuel",
      icon: <img src={impactIcon4} alt="impact icon" />,
      desc: "Our High-Quality Biomass Provides Consistent, High Heat Output With Low Ash Content, Making It A Reliable Substitute For Coal In Energy-Intensive Operations.",
    },
    {
      title: "Year-Round Supply Security",
      icon: <img src={impactIcon5} alt="impact icon" />,
      desc: "Through Our Extensive Network Of Suppliers And Streamlined Logistics, We Ensure Uninterrupted Fuel Delivery, Helping Clients Maintain Operational Continuity And Cost Efficiency.",
    },
    {
      title: "Energy Cost Optimization",
      icon: <img src={impactIcon6} alt="impact icon" />,
      desc: "Clients Benefit From A Cost-Effective Energy Source That Aligns With Both Regulatory Standards And Environmental Goals.",
    },
  ];

  const renderCards = (data) => (
    <Row
      gutter={[4, 32]}
      justify="center"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {data.map((item, index) => (
        <Col
          key={index}
          xs={24}
          md={12}
          lg={8}
          style={{
            display: "flex",
            justifyContent: "center", // يضمن توسيط الكارد داخل العمود نفسه
            paddingBottom: "32px",
          }}
        >
          <Card
            hoverable
            style={{
              maxWidth: "500px", // ونضع العرض الأصلي كحد أقصى
              margin: "0 auto", // يضمن توسيط الصف بالكامل

              minHeight: "420px", // نغير height إلى minHeight
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
              flex: 1,
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
      <div className="impact-header-row">
        <div className="impact-line-container">
          <span className="impact-line line-left" />
        </div>

        <Title
          level={2}
          style={{
            margin: 0,
            color: "#22381C",
            fontWeight: 700,
            fontSize: "40px",
            fontFamily: "'Alexandria', sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Our Impact
        </Title>

        <div className="impact-line-container">
          <span className="impact-line line-right" />
        </div>
      </div>

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
