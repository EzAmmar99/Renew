import "./LeadershipSection.css";

import { Typography, Avatar, Divider, Row, Col } from "antd";
import MemberCard from "./MemberCard";

const { Title, Paragraph, Text } = Typography;

import memberImage from "../../assets/member.png";

const LeadershipSection = () => {
  const teamData = [
    {
      name: "Tamer Salem",
      role: "Chief Executive Officer (CEO)",
      desc: "With 20+ years of experience in cement production and alternative fuels, Tamer leads RENEW’s technical and operational strategy. From quality control and equipment efficiency to logistics and yard management, he ensures operational excellence and continuous innovation.",
      img: memberImage,
    },
    {
      name: "Moushira Ramadan",
      role: "Strategic Partner \n Quality & Technical Advisor",
      desc: "A renowned expert with over 35 years in the cement industry, Moushira brings global quality standards and strategic insight to RENEW. Her leadership guides technical best practices, with a strong network across Lafarge and other global cement leaders.",
      img: memberImage,
    },
    {
      name: "Yasmeen ElBakry",
      role: "Planning & Marketing Manager",
      desc: "An MBA-holder with over a decade of regional and international experience in the industrial sector, Yasmeen leads business planning, investor relations, marketing, and contract management—positioning RENEW for long-term success and visibility.",
      img: memberImage,
    },
    {
      name: "Moushira Ramadan",
      role: "Strategic Partner \n Quality & Technical Advisor",
      desc: "A Renowned Expert With Over 35 Years In The Cement Industry, Moushira Brings Global Quality Standards And Strategic Insight To RENEW. Her Leadership Guides Technical Best Practices.",
      img: memberImage,
    },
    {
      name: "Tamer Salem",
      role: "Chief Executive Officer (CEO)",
      desc: "With 20+ Years Of Experience In Cement Production And Alternative Fuels, Tamer Leads RENEW’s Technical And Operational Strategy. From Quality Control And Equipment Efficiency To Logistics And Yard Management, He Ensures Operational Excellence And Continuous Innovation.",
      img: memberImage,
    },
    {
      name: "Moushira Ramadan",
      role: "Strategic Partner \n Quality & Technical Advisor",
      desc: "A Renowned Expert With Over 35 Years In The Cement Industry, Moushira Brings Global Quality Standards And Strategic Insight To RENEW. Her Leadership Guides Technical Best Practices.",
      img: memberImage,
    },
    // يمكنك إضافة المزيد من الأعضاء هنا بنفس التنسيق
  ];
  return (
    <>
      <div
        style={{
          padding: "50px 5% 0",
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
          margin: "50px",
          backgroundColor: "#fff",
          width: "100%",
          //   overflow: "hidden", // لمنع السكرول الخارجي للصفحة
          height: "800px",
        }}
      >
        {/* الحاوية التي تسمح بالسكرول الأفقي */}
        <div
          className="team-scroll-container"
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto", // تفعيل السكرول الأفقي
            height: "100%",
            overflowY: "hidden",
            margin: "100px 20px 180px",
            gap: "30px", // المسافة بين البطاقات
            scrollbarWidth: "none", // إخفاء الشريط في فايرفوكس
            msOverflowStyle: "none", // إخفاء الشريط في IE/Edge
          }}
        >
          {teamData.map((member, index) => (
            <div
              key={index}
              style={{
                flexShrink: 0, // يمنع انكماش البطاقة ويجبرها تحافظ على عرضها
                width: "490px", // نفس العرض اللي اتفقنا عليه للكارد
                height: "100px", // ارتفاع مناسب للبطاقة
              }}
            >
              <MemberCard member={member} />
            </div>
          ))}
        </div>

        {/* CSS لإخفاء شريط السكرول في متصفحات Chrome/Safari */}
        <style>{`
      .team-scroll-container::-webkit-scrollbar {
        display: none;
      }
    `}</style>
      </div>
    </>
  );
};

export default LeadershipSection;
