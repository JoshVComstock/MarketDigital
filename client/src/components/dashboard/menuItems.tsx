import {
  ProductOutlined,
  CopyOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const sidebarItems = [
  {
    key: "/dashboard",
    icon: <ProductOutlined />,
    label: "Producto",
  },
  {
    key: "/dashboard/category",
    icon: <CopyOutlined />,
    label: "Categoria",
  },
  {
    key: "/dashboard/user",
    icon: <UserOutlined />,
    label: "Usuarios",
  }
];
