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
    <Card
      hoverable
      bordered={false}
      style={{ background: "transparent" }}
      cover={
        <div
          style={{
            position: "relative",
            height: 350,
            overflow: "hidden",
            borderRadius: "15px",
          }}
        >
          <img
            alt={title}
            src={image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 0,
              right: 0,
              textAlign: "center",
              background: "rgba(0,0,0,0.2)",
              padding: "10px",
            }}
          >
            <Title
              level={4}
              style={{
                color: "#fff",
                margin: 0,
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              {title}
            </Title>
          </div>
        </div>
      }
    />
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
            image:
              "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800",
          },
          {
            id: 2,
            title: "Reliable Year-Round Supply",
            image:
              "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
          },
          {
            id: 3,
            title: "Industrial Fuel Integration",
            image:
              "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800",
          },
          {
            id: 4,
            title: "Agricultural Waste Conversion",
            image:
              "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=800",
          },
          {
            id: 5,
            title: "Sustainable Energy Logistics",
            image:
              "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800",
          },
          {
            id: 6,
            title: "Alternative Fuel Consulting",
            image:
              "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
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
          height: "calc(100vh - 70px)",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 20px",
          fontFamily: "'Alexandria', sans-serif", // تطبيق الخط المطلوب
        }}
      >
        <div style={{ maxWidth: 1100 }}>
          <Title
            style={{
              color: "#fff",
              fontSize: "70px",
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
              fontSize: "70px",
              marginTop: 10,
              fontWeight: 700,
            }}
          >
            {pageData.hero.subTitle}
          </Title>
          <Paragraph
            style={{
              color: "#fff",
              fontSize: "24px",
              fontWeight: 500,
              marginTop: 40,
              lineHeight: 1.4,
              maxWidth: "850px",
              margin: "40px auto 0",
            }}
          >
            {pageData.hero.description}
          </Paragraph>
        </div>
      </div>

      {/* SECTION 2: STATS */}
      <div
        style={{
          padding: "100px 10%",
          backgroundImage: `linear-gradient(rgba(45, 74, 34, 0.9), rgba(45, 74, 34, 0.9)), url('https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=2000')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <Title
            level={2}
            style={{ color: "#fff", fontSize: 36, marginBottom: 5 }}
          >
            Renew By The Numbers
          </Title>
          <div
            style={{
              width: 120,
              height: 3,
              background: "#fff",
              margin: "0 auto",
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
            marginBottom: 10,
          }}
        >
          Key Products & Solutions
        </Title>
        <Paragraph
          style={{
            color: "#07090E80",
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
      <div style={{ padding: "60px 10%", background: "#fdfdfd" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Divider style={{ borderColor: "#ddd" }}>
            <Title level={2} style={{ color: "#2d4a22", margin: 0 }}>
              Why Choose Us
            </Title>
          </Divider>
          <Paragraph
            style={{ maxWidth: 800, margin: "20px auto", color: "#666" }}
          >
            At RENEW, We Are Committed To Creating A Sustainable Future By
            Transforming Agricultural Waste Into Valuable Energy Solutions.
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
