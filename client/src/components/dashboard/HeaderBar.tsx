"use client";
import { Layout, Typography, Badge, Avatar, Dropdown, Space } from "antd";
import { BellOutlined, UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Text } = Typography;

const HeaderBar = ({ collapsed, setCollapsed }: any) => {
  return (
    <Header className="header">
      <div className="header-left">
        {collapsed ? (
          <MenuUnfoldOutlined className="trigger" onClick={() => setCollapsed(false)} />
        ) : (
          <MenuFoldOutlined className="trigger" onClick={() => setCollapsed(true)} />
        )}
        <Text strong className="title">Dashboard</Text>
      </div>

      <Space size="large">
        <Dropdown
          menu={{
            items: [
              { key: "profile", label: "Perfil" },
              { key: "logout", label: "Cerrar sesión" },
            ],
          }}
        >
          <div className="user-box">
            <Avatar icon={<UserOutlined />} style={{ background: "#1890ff" }} />
            <Text strong>Usuario</Text>
          </div>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default HeaderBar;
