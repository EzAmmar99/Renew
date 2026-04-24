import "./LeadershipSection.css";
import { Typography, Avatar, Divider, Row, Col } from "antd";
import MemberCard from "./MemberCard";

const { Title, Paragraph, Text } = Typography;

import FemaleMemberImage from "../../assets/female-member.png";
import MaleMemberImage from "../../assets/male-member.png";

const LeadershipSection = () => {
  const teamData = [
    {
      name: "Moushira Ramadan",
      role: "Strategic Partner \n Quality & Technical Advisor",
      desc: "A renowned expert with over 35 years in the cement industry, Moushira brings global quality standards and strategic insight to RENEW. Her leadership guides technical best practices, with a strong network across Lafarge and other global cement leaders.",
      img: FemaleMemberImage,
    },
    {
      name: "Tamer Salem",
      role: "Chief Executive Officer (CEO)",
      desc: "With 20+ years of experience in cement production and alternative fuels, Tamer leads RENEW’s technical and operational strategy. From quality control and equipment efficiency to logistics and yard management, he ensures operational excellence and continuous innovation.",
      img: MaleMemberImage,
    },

    {
      name: "Yasmeen ElBakry",
      role: "Planning & Marketing Manager",
      desc: "An MBA-holder with over a decade of regional and international experience in the industrial sector, Yasmeen leads business planning, investor relations, marketing, and contract management—positioning RENEW for long-term success and visibility.",
      img: FemaleMemberImage,
    },
    {
      name: "Amr Hamdy",
      role: "Board Member & Partner",
      desc: "A Chief Commercial Officer at Microsoft, he leads the corporate segment across Central, Eastern, and Southern Europe, the Middle East, and Africa. With 20+ years of experience in solution sales across the CEMA region, he brings deep market insight and strategic expertise. He has a proven track record in driving digital transformation and building scalable, high-impact partnerships.",
      img: MaleMemberImage,
    },
    {
      name: "Mohamed Farag Salem",
      role: "Advisor – Alternative Fuel Pioneer",
      desc: "Founder of Egypt’s first Alternative Fuel Department and former GM of ECOCEM, Mohamed brings unmatched expertise in waste-to-fuel innovation. His role as strategic advisor supports RENEW with industry foresight and policy alignment.",
      img: MaleMemberImage,
    },

    // يمكنك إضافة المزيد من الأعضاء هنا بنفس التنسيق
  ];

  const doubledData = [...teamData, ...teamData]; // تكرار البيانات لعمل حلقة مستمرة

  return (
    <>
      <div
        style={{
          padding: "50px 2% 0",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <div className="leadership-header-row">
          <div className="leadership-line-container">
            <span className="leadership-line line-left" />
          </div>

          <Title
            level={2}
            style={{
              fontFamily: "'Alexandria', sans-serif",
              margin: 0,
              color: "#FEC858", // حافظنا على اللون الأصفر حسب طلبك
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "150%",
              whiteSpace: "nowrap",
            }}
          >
            Leadership Team
          </Title>

          <div className="leadership-line-container">
            <span className="leadership-line line-right" />
          </div>
        </div>
        <Paragraph
          style={{
            fontFamily: "'Alexandria', sans-serif",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "150%",
            textTransform: "capitalize",
            color: "#666",
            maxWidth: "900px",
            margin: "20px auto 0",
          }}
        >
          Meet Our Visionary Board Of Directors Leading RENEW Toward A Cleaner
          Future With Sustainable, Biomass-Powered Energy Solutions.
        </Paragraph>
      </div>

      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          backgroundColor: "#fff",
          width: "100%",
          height: "auto",
        }}
      >
        <div
          className="team-slider-wrapper"
          style={{
            width: "100%",
            overflow: "hidden",
            padding: "100px 0",
            background: "#fff",
          }}
        >
          <div
            className="moving-container"
            style={{
              display: "flex",
              gap: "40px",
              width: "max-content",
            }}
          >
            {doubledData.map((member, index) => (
              <div
                key={index}
                style={{
                  flexShrink: 0,
                  width: "490px",
                }}
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>

          {/* CSS السحري لضمان التوقف */}
          <style>{`
            @keyframes slide {
              from { transform: translateX(0); }
              to { transform: translateX(-2450px); }
            }
            .moving-container {
              animation: slide 40s linear infinite;
              will-change: transform;
            }
            .moving-container:has(> div:hover) {
              animation-play-state: paused !important;
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default LeadershipSection;
