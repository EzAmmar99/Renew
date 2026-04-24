import React from "react";
import { Typography } from "antd";
import "./KeyPeopleSection.css";

const { Title, Paragraph } = Typography;

const KeyPeopleSection = () => {
  return (
    <div
      style={{
        padding: "20px 20px",
        textAlign: "center",
        backgroundColor: "#fff",
        maxWidth: "1500px",
        margin: "0 auto",
      }}
    >
      {/* العنوان الرئيسي - Key People & Partners */}
      <Title
        className="key-people-title"
        style={{
          fontFamily: "'Alexandria', sans-serif",
          fontWeight: 700,
          lineHeight: "150%",
          letterSpacing: "0%",
          textAlign: "center",
          textTransform: "capitalize",
          color: "#22381C", // اللون الأخضر الغامق من التصميم
          marginBottom: "24px",
        }}
      >
        Key People & Partners
      </Title>

      {/* الوصف - Description */}
      <Paragraph
        className="key-people-description"
        style={{
          fontFamily: "'Alexandria', sans-serif",
          fontWeight: 400,
          lineHeight: "150%",
          letterSpacing: "0%",
          textAlign: "center",
          textTransform: "capitalize",
          color: "#737373", // لون رمادي متناسق
        //   maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        RENEW Is Driven By A Seasoned Team Of Experts With Decades Of Experience
        In Alternative Fuels, Cement, Commercial Strategy, And Industrial
        Operations. Our Strength Lies In The Synergy Between Technical Mastery,
        Commercial Insight, And A Shared Vision For Sustainability.
      </Paragraph>
    </div>
  );
};

export default KeyPeopleSection;
