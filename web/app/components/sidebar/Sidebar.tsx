"use client";

import clsx from "clsx";
import { ChevronDown, ChevronsLeft, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import img from "../favicon.ico";
import { ITEM_SIDEBAR } from "./constants/items";
import { useSidebarContext } from "./context/sidebarContext";
import { CustomIcon } from "@/app/components/icons/icon";

export const Sidebar = () => {
  const { isCollapsed, toggleCollapsed } = useSidebarContext();
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderMenuItem = (
    item: (typeof ITEM_SIDEBAR)[number]["items"][number],
    isChild: boolean = false,
    index?: number,
    total?: number
  ) => {
    const isActive = pathname === item.path;
    const isOpen = !!openItems[item.label];
    const isLast =
      index !== undefined && total !== undefined && index === total - 1;

    return (
      <li key={item.path || item.label} className="relative">
        <div
          onClick={() => item.children && toggleItem(item.label)}
          className={activeClass(isActive)}
        >
          {isChild && (
            <>
              <div
                className={clsx(
                  "absolute left-0 w-0.5 bg-primary-900/50",
                  isLast ? "h-1/2 top-0" : "h-[110%] top-0"
                )}
              ></div>
              <div
                className={clsx(
                  "absolute left-0 w-3 bg-primary-900/50",
                  isLast ? "h-0.5" : "h-[1.4]"
                )}
              ></div>
            </>
          )}

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
  const navClass = clsx(
    "min-h-screen relative border-r-2 transition-all duration-300 bg-linear-to-r from-[#40BCA801] via-[#40BCA805] to-[#40BCA820] border-r-primary-500/50",
    {
      "w-[270px]": isCollapsed,
      "w-[100px]": !isCollapsed,
    }
  );

  const activeClass = (isActive: boolean) =>
    clsx(
      "flex relative items-center gap-2 px-4 py-3 rounded-xl transition-colors text-sm justify-between",
      {
        "bg-primary-900 text-white": isActive,
        "hover:bg-primary-100": !isActive,
      }
    );
  const HeaderClass = clsx(
    "flex gap-4 p-4  items-center border-b border-b-primary-500/50",
    {
      "justify-between": isCollapsed,
      "justify-center": !isCollapsed,
    }
  );
  const TitleClass = clsx("text-xs uppercase text-primary-900 mb-2", {
    "self-start": isCollapsed,
    "self-center": !isCollapsed,
  });
  const IconCollapsedClass = clsx("transition-transform", {
    "rotate-180": isCollapsed,
    "rotate-0": !isCollapsed,
  });
  return (
    <nav className={navClass}>
      <header className={HeaderClass}>
        <section className="flex gap-4 items-center justify-center">
          <Image src={img} alt="icon" width={32} height={32} />
          {isCollapsed && <p className="font-semibold"> Marker Dijital</p>}
        </section>
        {isCollapsed && (
          <button className="bg-primary-100 p-2 rounded-full text-primary-900">
            <CustomIcon icon={EllipsisVertical} size={14} />
          </button>
        )}
      </header>

      <div>
        {ITEM_SIDEBAR.map((category, index) => (
          <div key={index} className="p-4">
            <h3 className={TitleClass}>{category.title}</h3>
            <ul className="flex flex-col gap-2">
              {category.items.map((item, i) =>
                renderMenuItem(item, false, i, category.items.length)
              )}
            </ul>
          </div>
        ))}
      </div>

      <button
        onClick={toggleCollapsed}
        className="absolute   bg-linear-to-r from-[#40BCA801] via-[#40BCA8] to-[#40BCA8] border-r-primary-500/50 -right-8 top-16 w-8 h-8 rounded-r-lg text-white flex justify-center items-center"
      >
        <CustomIcon
          icon={ChevronsLeft}
          size={18}
          className={IconCollapsedClass}
        />
      </button>
    </nav>
  );
};
