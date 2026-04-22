import { Typography, Row } from "antd";
import editsImg from "../../../assets/edits.png";
import { pageData } from "../homeData";
import StatItem from "./StatItem";

const { Title } = Typography;

const HomeStatsSection = () => {
  return (
    <div
      className="home-stats-section"
      style={{
        backgroundImage: `linear-gradient(rgba(45, 74, 34, 0.8), rgba(45, 74, 34, 0.8)), url(${editsImg})`,
      }}
    >
      <div className="home-stats-header">
        <Title level={2} className="home-stats-title">
          Renew By The Numbers
        </Title>
        <div className="home-stats-line" />
      </div>

      <Row gutter={[16, 32]} justify="center">
        {pageData.stats.map((stat) => (
          <StatItem key={stat.id} value={stat.value} label={stat.label} />
        ))}
      </Row>
    </div>
  );
};

export default HomeStatsSection;