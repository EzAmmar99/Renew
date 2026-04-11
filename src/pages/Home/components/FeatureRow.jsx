import { Row, Col, Typography } from "antd";

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
}) => {
  const TextContent = (
    <div className="feature-text" style={{ background: bgColor }}>
      <div className="feature-watermark">
        <span>m</span>
      </div>

      <div
        className="feature-text-inner"
        style={{ maxWidth: `${contentWidth}px` }}
      >
        <div className="feature-top-row">
          <div className="feature-id">{id}</div>
          <div className="feature-icon-wrapper">{icon}</div>
        </div>

        <Title level={2} className="feature-title">
          {title}
        </Title>

        <Paragraph
          className="feature-description"
          style={{ maxWidth: `${descWidth}px` }}
        >
          {description}
        </Paragraph>
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
    <Row gutter={0} wrap={false} align="stretch" className="feature-row">
      {isReversed ? (
        <>
          <Col flex="1 1 50%" className="feature-col">
            {ImageContent}
          </Col>
          <Col flex="1 1 50%" className="feature-col">
            {TextContent}
          </Col>
        </>
      ) : (
        <>
          <Col flex="1 1 50%" className="feature-col">
            {TextContent}
          </Col>
          <Col flex="1 1 50%" className="feature-col">
            {ImageContent}
          </Col>
        </>
      )}
    </Row>
  );
};

export default FeatureRow;