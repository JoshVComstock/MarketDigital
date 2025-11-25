"use client";

import clsx from "clsx";
import {
  ChevronDown,
  ChevronsLeft,
  EllipsisVertical,
  PanelLeft,
  ShoppingCart,
  Sun,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ITEM_SIDEBAR } from "./constants/items";
import { useSidebarContext } from "./context/sidebarContext";
import img from "../../../public/globe.svg";
import { CustomIcon } from "../ui/customIcon";
import CustomButton from "../ui/customButton";
export const Sidebar = () => {
  const { isCollapsed, toggleCollapsed } = useSidebarContext();
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  // custom class
  const navClass = clsx(
    "min-h-screen flex  gap-4 flex-col relative border-r-2 transition-all duration-300 ",
    {
      "w-[300px]": isCollapsed,
      "w-[100px]": !isCollapsed,
    }
  );
  const renderMenuItem = (
    item: (typeof ITEM_SIDEBAR)[number]["items"][number],
    isChild: boolean = false,
    index?: number,
    total?: number
  ) => {
    const isActive = pathname === item.path;
    const isOpen = !!openItems[item.label];
    return (
      <li key={item.path || item.label} className="relative">
        <div
          onClick={() => item.children && toggleItem(item.label)}
          className={activeClass(isActive)}
        >
          <div className="flex gap-2 items-center">
            {item.icon && (
              <CustomIcon
                icon={item.icon}
                className={clsx({ "text-white": isActive })}
                size={18}
              />
            )}
            {isCollapsed && <p>{item.label}</p>}
          </div>

          {item.children && item.children.length > 0 && (
            <CustomIcon
              icon={ChevronDown}
              size={14}
              className={clsx("text-gray-500 transition-transform", {
                "rotate-180": isOpen,
              })}
            />
          )}
        </div>

        {item.children && isOpen && (
          <ul className="ml-4 mt-1 flex flex-col gap-1">
            {item.children.map((child, i) =>
              renderMenuItem(child, true, i, item.children?.length)
            )}
          </ul>
        )}
      </li>
    );
  };

  const activeClass = (isActive: boolean) =>
    clsx(
      "flex relative border-r items-center gap-2 text-white/80 px-4 py-3 rounded-3xl  text-sm justify-between",
      {
        " border-primary-500/80 bg-gradient-to-r from-transparent to-primary-500/10 ":
          isActive,
        " border-transparent hover:border-white/80 hover:bg-gradient-to-r hover:from-transparent hover:to-white/20":
          !isActive,
      }
    );
  const HeaderClass = clsx("flex gap-4   items-center min-h-32", {
    "justify-between": isCollapsed,
    "justify-center": !isCollapsed,
  });
  const TitleClass = clsx(
    "text-sm uppercase text-primary-900 mb-2 text-white/70",
    {
      "self-start": isCollapsed,
      "self-center": !isCollapsed,
    }
  );
  return (
    <nav className="bg-background-dark-300 h-screen flex ">
      <section className="w-24 text-white flex items-center flex-col gap-4 p-4 border-r border-r-white/20 h-full">
        <CustomButton icon={Sun} variant="focus-icon" size="lg" />
        <CustomButton icon={ShoppingCart} variant="focus-icon" size="lg" />
      </section>
      <section className={navClass}>
        <div className={HeaderClass}>
          <p className="text-white text-2xl px-4 ">Marker Digital</p>
          <div className="bg-linear-to-l from-transparent to-white/20 p-4 rounded-l-3xl text-white ">
            <CustomIcon icon={PanelLeft}></CustomIcon>
          </div>
        </div>
        <article>
          {ITEM_SIDEBAR.map((category, index) => (
            <div key={index} className="p-4">
              <h3 className={TitleClass}>{category.title}</h3>
              <ul className="flex flex-col  ">
                {category.items.map((item, i) =>
                  renderMenuItem(item, false, i, category.items.length)
                )}
              </ul>
            </div>
          ))}
        </article>
      </section>
    </nav>
  );
};
