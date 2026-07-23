import { Col, Typography } from "antd";
import LazyImage from "../../../components/LazyImage";

const { Title } = Typography;

const SolutionCard = ({ title, image, index = 0 }) => (
  <div
    className="solution-card reveal-on-scroll reveal-zoom"
    style={{ "--stagger-index": index }}
  >
    <LazyImage src={image} alt={title} className="solution-card-image" />
    <div className="solution-card-overlay" />
    <Title level={4} className="solution-card-title">
      {title}
    </Title>
  </div>
);

export default SolutionCard;
