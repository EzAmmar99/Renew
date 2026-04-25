import { Row, Col, Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

const FeatureRow = ({
  id,
  title,
  description,
  image,
  icon,
  isReversed = false,
  bgColor,
  contentWidth = 430,
  descWidth = 390,
  index = 0,
}) => {
  const TextContent = (
    <div className="feature-text" style={{ background: bgColor }}>
      {/* الوتر مارك مضاف عبر CSS ::before */}

      <div className="feature-text-inner">
        <div className="feature-top-row">
          <div className="feature-id">{id}</div>
          <div className="feature-icon-wrapper">
            {/* هنا نتأكد أن لون الأيقونة يتبع لون الخلفية ليكون متناسقاً */}
            {React.cloneElement(icon, {
              style: { fontSize: "30px", color: bgColor },
            })}
          </div>
        </div>

        <Title level={2} className="feature-title">
          {title}
        </Title>

        <Paragraph className="feature-description">{description}</Paragraph>
      </div>
    </div>
  );

  const ImageContent = (
    <div className="feature-image-wrapper">
      <img
        src={image}
        alt={typeof title === "string" ? title : "feature"}
        className="feature-image"
      />
    </div>
  );

  return (
    <Row
      gutter={0}
      wrap={false}
      align="stretch"
      className={`feature-row reveal-on-scroll ${
        isReversed ? "reveal-right" : "reveal-left"
      }`}
      style={{ "--stagger-index": index }}
    >
      {isReversed ? (
        <>
          <Col flex="1 1 50%" className="feature-col feature-image-col">
            {ImageContent}
          </Col>
          <Col flex="1 1 50%" className="feature-col feature-text-col">
            {TextContent}
          </Col>
        </>
      ) : (
        <>
          <Col flex="1 1 50%" className="feature-col feature-text-col">
            {TextContent}
          </Col>
          <Col flex="1 1 50%" className="feature-col feature-image-col">
            {ImageContent}
          </Col>
        </>
      )}
    </Row>
  );
};

export default FeatureRow;
