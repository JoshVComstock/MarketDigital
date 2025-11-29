import {
  BadgeCheck,
  ChartNoAxesCombined,
  House,
  Info,
  Layers3,
  LucideIcon,
  MessageCircleMore,
  Plus,
  Settings,
  Shirt,
  ShoppingCart,
} from "lucide-react";

export interface MenuItem {
  label: string;
  path?: string;
  icon?: LucideIcon;
  children?: MenuItem[];
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const ITEM_SIDEBAR: MenuCategory[] = [
  {
    title: "MENU",
    items: [
      { label: "Overview", path: "/overview", icon: House },
      { label: "Orders", path: "/orders", icon: ShoppingCart },
    ],
  },
  {
    title: "INVENTORY",
    items: [
      {
        label: "Products",
        icon: Shirt,
        children: [
          { label: "Nuevos", path: "/productos/new", icon: Plus },
          {
            label: "En tencia",
            path: "/productos/tendencia",
            icon: ChartNoAxesCombined,
          },
        ],
      },
      { label: "Categories", path: "/categories", icon: Layers3 },
      { label: "Promos", path: "/promos", icon: BadgeCheck },
    ],
  },
  {
    title: "OTHERS",
    items: [{ label: "Settings", path: "/settings", icon: Settings }],
  },
];

export const ITEMS_BODY_SIDEBAR: MenuItem[] = [
  { label: "Feedback", path: "/feedback", icon: MessageCircleMore },
  { label: "Helps", path: "/helps", icon: Info },
];
