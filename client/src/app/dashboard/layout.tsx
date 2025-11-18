"use client";
import { Layout } from "antd";
import { useState } from "react";
import Sidebar from "@/components/dashboard/SideBar";
import HeaderBar from "@/components/dashboard/HeaderBar";


const { Sider, Content } = Layout;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>

      <Sider trigger={null} collapsible collapsed={collapsed} className="sider">
        <div className="logo">{collapsed ? "M" : "Market"}</div>
        <Sidebar collapsed={collapsed} />
      </Sider>

      <Layout>
        <HeaderBar collapsed={collapsed} setCollapsed={setCollapsed} />

        <Content className="content">
          {children}
        </Content>
      </Layout>

    </Layout>
  );
}
