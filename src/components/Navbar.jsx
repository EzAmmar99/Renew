import { Layout, Menu, Button, Typography } from "antd";

const Navbar = () => {
  const { Header } = Layout;
  const { Text } = Typography;

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#fff",
        padding: "0 10%",
        height: 70,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Text
          strong
          style={{ fontSize: 24, color: "#2d4a22", letterSpacing: 1 }}
        >
          RENEW
        </Text>
        <div style={{ marginLeft: 5, color: "#82bc41", fontSize: 20 }}>🌿</div>
      </div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ border: "none", flexGrow: 1, justifyContent: "center" }}
      >
        <Menu.Item key="1" style={{ color: "#82bc41", fontWeight: "bold" }}>
          Home
        </Menu.Item>
        <Menu.Item key="2">About US</Menu.Item>
        <Menu.Item key="3">Solutions</Menu.Item>
        <Menu.Item key="4">Projects</Menu.Item>
      </Menu>
      <Button
        type="primary"
        size="large"
        style={{
          background: "#ffcc5c",
          borderColor: "#ffcc5c",
          color: "#000",
          fontWeight: "bold",
          borderRadius: 8,
        }}
      >
        CONTACT US
      </Button>
    </Header>
  );
};

export default Navbar;
