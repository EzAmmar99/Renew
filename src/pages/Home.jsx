import { useState, useEffect } from "react";
// 1. تم إضافة Card و Divider هنا
import {
  Layout,
  Button,
  Typography,
  Row,
  Col,
  Space,
  Spin,
  Card,
  Divider,
} from "antd";
import {
  SettingOutlined,
  BulbOutlined,
  ShakeOutlined,
  SendOutlined,
} from "@ant-design/icons";
import heroImg from "../assets/hero.png";
import editsImg from "../assets/edits.png";

import img1 from "../assets/Products-1.png";
import img2 from "../assets/Products-2.png";
import img3 from "../assets/Products-3.png";
import img4 from "../assets/Products-4.png";
import img5 from "../assets/Products-5.png";
import img6 from "../assets/Products-6.png";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const StatItem = ({ value, label }) => (
  <Col
    xs={24}
    sm={12}
    md={6}
    style={{ textAlign: "center", padding: "20px 0" }}
  >
    <Title
      level={2}
      style={{
        color: "#ffcc5c",
        fontSize: "clamp(24px, 3vw, 42px)",
        margin: 0,
        fontWeight: 700,
      }}
    >
      {value}
    </Title>
    <Text
      style={{
        color: "#fff",
        fontSize: "18px",
        display: "block",
        marginTop: 8,
        fontWeight: 500,
      }}
    >
      {label}
    </Text>
  </Col>
);

const SolutionCard = ({ title, image }) => (
  <Col xs={24} sm={12} md={8}>
    <div
      style={{
        position: "relative",
        height: 520,
        width: 450,
        borderRadius: "25px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* الصورة */}
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* overlay خفيف (اختياري عشان وضوح النص) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1))",
        }}
      />

      {/* العنوان */}
      <Title
        level={4}
        style={{
          position: "absolute",
          top: 35,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#fff",
          margin: 0,
          fontWeight: 700,
          fontSize: "20px",
          textShadow: "0 2px 6px rgba(0,0,0,0.7)",
        }}
      >
        {title}
      </Title>
    </div>
  </Col>
);

// --- مكون فرعي لسطر المميزات (Feature Row) ---
const FeatureRow = ({
  id,
  title,
  description,
  image,
  icon,
  isReversed,
  bgColor,
}) => {
  // المحتوى النصي المعاد استخدامه
  const TextContent = (
    <div style={{ padding: "10% 15%", color: "#fff" }}>
      <Space direction="vertical" size="large">
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          {/* الرقم الخلفي مع شفافية منخفضة */}
          <Title
            level={1}
            style={{
              margin: 0,
              opacity: 0.2,
              color: "#fff",
              fontSize: "80px",
              fontWeight: 700,
            }}
          >
            {id}
          </Title>
          {/* دائرة بيضاء تحتوي على الأيقونة */}
          <div
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </div>
        </div>
        <Title
          level={2}
          style={{
            color: "#fff",
            margin: 0,
            fontWeight: 700,
            fontSize: "36px",
          }}
        >
          {title}
        </Title>
        <Paragraph
          style={{
            color: "#fff",
            fontSize: "18px",
            opacity: 0.9,
            fontWeight: 400,
            fontSize: "30px",
          }}
        >
          {description}
        </Paragraph>
      </Space>
    </div>
  );

  // الصورة المعاد استخدامها مع object-fit
  const ImageContent = (
    <img
      src={image}
      alt={title}
      style={{
        width: "100%",
        height: "400px",
        objectFit: "cover",
        display: "block",
      }}
    />
  );

  return (
    <Row
      align="middle"
      style={{ background: bgColor, minHeight: 400, width: "100%" }}
      key={id}
    >
      {/* إذا كان isReversed = true: النص على اليمين والصورة على اليسار */}
      {isReversed ? (
        <>
          <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
            {ImageContent}
          </Col>
          <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
            {TextContent}
          </Col>
        </>
      ) : (
        /* إذا كان isReversed = false: النص على اليسار والصورة على اليمين */
        <>
          <Col xs={24} md={12}>
            {TextContent}
          </Col>
          <Col xs={24} md={12}>
            {ImageContent}
          </Col>
        </>
      )}
    </Row>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  // 2. دمج البيانات في State واحدة لتجنب تكرار الـ useEffect
  const [pageData, setPageData] = useState({
    hero: {},
    stats: [],
    solutions: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      // محاكاة جلب كل بيانات الصفحة مرة واحدة
      const mockData = {
        hero: {
          mainTitle: "Innovating A Greener Future",
          subTitle: "With Renewable Solutions",
          description:
            "discover how renew turns agricultural waste into biomass, sustainable materials, and renewable energy. join us in building a cleaner, greener future.",
        },
        stats: [
          { id: 1, value: "Top 5 Or 6", label: "Cement Factories" },
          { id: 2, value: "+200,000", label: "Tn Supplied" },
          {
            id: 3,
            value: "+ 240,000",
            label: "Tons Of CO₂ Equivalent Replaced",
          },
          { id: 4, value: "2015", label: "Established" },
        ],
        solutions: [
          {
            id: 1,
            title: "Processed Biomass Fuel",
            image: img1,
          },
          {
            id: 2,
            title: "Reliable Year-Round Supply",
            image: img2,
          },
          {
            id: 3,
            title: "Industrial Fuel Integration",
            image: img3,
          },
          {
            id: 4,
            title: "Agricultural Waste Conversion",
            image: img4,
          },
          {
            id: 5,
            title: "Sustainable Energy Logistics",
            image: img5,
          },
          {
            id: 6,
            title: "Alternative Fuel Consulting",
            image: img6,
          },
        ],
      };

      setPageData(mockData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const features = [
    {
      id: "01",
      title: "Proven Industry Expertise",
      description:
        "Backed By 20+ Years In Alternative Fuel And 35+ Years In Cement Industry.",
      image:
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800",
      bgColor: "#b1d249", // اللون الأخضر الفاتح
      icon: <SettingOutlined style={{ fontSize: "30px", color: "#b1d249" }} />,
      isReversed: true,
    },
    {
      id: "02",
      title: "Superior Biomass Quality",
      description: "High Heat Value, Low Ash—Ideal For Industrial Use.",
      image:
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800",
      bgColor: "#528443", // اللون الأخضر الغامق
      icon: <BulbOutlined style={{ fontSize: "30px", color: "#528443" }} />,
      isReversed: false,
    },
    {
      id: "03",
      title: "Reliable Year-Round Supply",
      description: "Consistent Delivery Through A Diversified Network.",
      image:
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800",
      bgColor: "#b1d249",
      icon: <ShakeOutlined style={{ fontSize: "30px", color: "#b1d249" }} />,
      isReversed: true,
    },
  ];

  const colors = {
    primaryYellow: "#FEC858",
    lightGreen: "#9FBA3D",
    darkGreen: "#21381C",
    grayText: "#838486",
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" tip="Loading Renew Experience..." />
      </div>
    );
  }

  return (
    <Content>
      {/* SECTION 1: HERO */}
      <div
        style={{
          //   minHeight: "100vh",
          //   width: "100%",
          //   backgroundImage: `url(${heroImg})`,
          //   backgroundSize: "contain",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",

          minHeight: "100vh",
          width: "100%",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 100%",
          backgroundRepeat: "no-repeat",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px 90px",
          fontFamily: "'Alexandria', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 1050,
            width: "100%",
            transform: "translateY(160px)",
          }}
        >
          <Title
            style={{
              color: "#fff",
              fontSize: "clamp(42px, 6vw, 70px)",
              margin: 0,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Innovating{" "}
            <span style={{ color: colors.lightGreen }}>
              A Greener Future
            </span>{" "}
          </Title>
          <Title
            level={1}
            style={{
              color: "#fff",
              fontSize: "clamp(42px, 6vw, 70px)",
              margin: "8px 0 0",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {pageData.hero.subTitle}
          </Title>
          <Paragraph
            style={{
              color: "#fff",
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 500,
              lineHeight: 1.5,
              maxWidth: "1150px",
              margin: "28px auto 0",
            }}
          >
            {pageData.hero.description}
          </Paragraph>
        </div>
      </div>

      {/* SECTION 2: STATS */}
      <div
        style={{
          padding: "80px 10%",
          height: "480px",
          backgroundImage: `linear-gradient(rgba(45, 74, 34, 0.9), rgba(45, 74, 34, 0.9)), url(${editsImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 70%",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <Title
            level={2}
            style={{
              color: "#fff",
              fontSize: 40,
              marginBottom: 5,
              fontWeight: 600,
            }}
          >
            Renew By The Numbers
          </Title>
          <div
            style={{
              width: 300,
              height: 3,
              background: "#fff",
              margin: "15px auto",
              borderRadius: 3,
            }}
          />
        </div>

        <Row gutter={[16, 32]} justify="center">
          {pageData.stats.map((stat) => (
            <StatItem key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </Row>
      </div>

      {/* SECTION 3: KEY PRODUCTS & SOLUTIONS */}
      <div
        style={{
          padding: "80px 10%",
          textAlign: "center",
          background: "#fff",
        }}
      >
        <Title
          level={2}
          style={{
            color: "#22381C",
            fontWeight: 600,
            fontSize: "40px",
            marginBottom: 30,
          }}
        >
          Key Products & Solutions
        </Title>
        <Paragraph
          style={{
            color: "#07090E80",
            opacity: 0.8,
            marginBottom: 50,
            fontWeight: 500,
            fontSize: "24px",
          }}
        >
          Comprehensive End-To-End Technology Solutions For All Types Of Organic
          Waste
        </Paragraph>

        <Row gutter={[24, 24]}>
          {pageData.solutions.map((sol) => (
            <SolutionCard key={sol.id} title={sol.title} image={sol.image} />
          ))}
        </Row>
      </div>

      {/* SECTION 4: WHY CHOOSE US */}
      <div
        style={{
          padding: "70px 4% 40px",
          background: "#ffffff",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "28px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                flex: 1,
                maxWidth: "330px",
                height: "1px",
                background: "#7f9278",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#2d4a22",
                }}
              />
            </div>

            <Title
              level={2}
              style={{
                margin: 0,
                color: "#243d1f",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 600,
                fontFamily: "'Alexandria', sans-serif",
              }}
            >
              Why Choose Us
            </Title>

            <div
              style={{
                flex: 1,
                maxWidth: "330px",
                height: "1px",
                background: "#7f9278",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0, // 👈 مهم (عكس اليسار)
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#2d4a22",
                }}
              />
            </div>
          </div>

          <Paragraph
            style={{
              maxWidth: "1150px",
              margin: "0 auto",
              color: "#8a8a8a",
              fontSize: "clamp(16px, 1.5vw, 24px)",
              lineHeight: 1.6,
              fontWeight: 500,
              opacity: 0.8,
              fontFamily: "'Alexandria', sans-serif",
            }}
          >
            At RENEW, We Are Committed To Creating A Sustainable Future By
            Transforming Agricultural Waste Into Valuable Energy Solutions.
            Here's Why You Can Trust Us To Lead The Way:
          </Paragraph>
        </div>
      </div>
      <div style={{ width: "100%", overflow: "hidden" }}>
        {features.map((item) => (
          <FeatureRow key={item.id} {...item} />
        ))}
      </div>

      {/* --- 7. السكشن الأخير: READY TO POWER (الجديد) --- */}
      <div style={{ padding: "100px 10% 60px", background: "#fff" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <Title level={2} style={{ color: "#2d4a22", fontSize: "32px" }}>
            Ready To Power Your Industry With Clean Energy?
          </Title>
          <Paragraph style={{ color: "#777", fontSize: "16px" }}>
            Whether You're Looking To Reduce Fuel Costs, Improve Sustainability,
            Or Explore Reliable Biomass Solutions—RENEW Is Here To Help.
          </Paragraph>
        </div>

        <Row gutter={[60, 40]} align="middle">
          <Col xs={24} md={11}>
            <Title
              level={3}
              style={{
                color: "#333",
                lineHeight: "1.5",
                marginBottom: "40px",
              }}
            >
              Our Team Is Ready To Answer Your Questions And Explore How We Can
              Support Your Energy Needs.
            </Title>
            <Button
              type="primary"
              icon={<SendOutlined rotate={-45} />}
              style={{
                background: "#ffcc5c",
                borderColor: "#ffcc5c",
                color: "#2d4a22",
                height: "55px",
                padding: "0 40px",
                fontWeight: "bold",
                borderRadius: "10px",
                fontSize: "18px",
              }}
            >
              Let’s Talk
            </Button>
          </Col>

          <Col xs={24} md={13}>
            <div style={{ position: "relative", padding: "20px" }}>
              {/* البرواز الأصفر الخلفي */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: "40px",
                  left: "40px",
                  background: "#ffcc5c",
                  borderRadius: "40px",
                  zIndex: 0,
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1600880212340-02d956ea0a39?q=80&w=800"
                alt="Team contact"
                style={{
                  width: "100%",
                  borderRadius: "40px",
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default Home;
