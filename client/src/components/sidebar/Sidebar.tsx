"use client";

import clsx from "clsx";
import { Moon, PanelLeft, ShoppingCart, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import CustomButton from "../ui/customButton";
import { ITEM_SIDEBAR } from "./constants/ITEMS";
import { useSidebarContext } from "./context/sidebarContext";
import { SidebarItem } from "./SidebarItem";
export const Sidebar = () => {
  const { isCollapsed, toggleCollapsed } = useSidebarContext();
  const { theme, toggleTheme } = useTheme();
  const navClass = clsx(
    "min-h-screen flex  gap-4 relative transition-all duration-300 ",
    {
      "bg-background-light-300": theme === "LIGHT",
      "bg-background-dark-300": theme === "DARK",
    }
  );
  const importantSectionClass = clsx(
    "w-24 text-white flex items-center flex-col gap-4 p-4 border-r  h-full",
    {
      "border-r-gray-300": theme === "LIGHT",
      "border-r-white/20": theme === "DARK",
    }
  );
  const titleClass = clsx("text-xs mb-6 ", {
    "text-gray-400": theme === "LIGHT",
    "text-gray-100/50  ": theme === "DARK",
  });

  const HeaderClass = clsx("flex items-center justify-between p-4 relative");
  const NavItemClass = clsx(
    "flex  flex-col gap-2 transition-all duration-300",
    {
      "w-[250px]": isCollapsed,
      "w-[100px]": !isCollapsed,
    }
  );

  return (
    <nav className={navClass}>
      <section className={importantSectionClass}>
        <CustomButton
          icon={theme === "DARK" ? Sun : Moon}
          variant="focus-icon"
          size="lg"
          onClick={toggleTheme}
        />
        <CustomButton icon={ShoppingCart} variant="focus-icon" size="lg" />
      </section>
      <section className={NavItemClass}>
        <div className={HeaderClass}>
          <div className="absolute top-4 right-0">
            <CustomButton
              icon={PanelLeft}
              variant="gradiant"
              size="lg"
              onClick={toggleCollapsed}
            />
          </div>
        </div>
        <article>
          {ITEM_SIDEBAR.map((category, index) => (
            <div key={index} className="p-4 flex flex-col gap-2 ">
              <h3 className={titleClass}>{category.title}</h3>
              <article className="flex flex-col gap-2">
                {category.items.map((item, index) => (
                  <SidebarItem key={index} item={item} />
                ))}
              </article>
            </div>
          ))}
        </article>
      </section>
    </nav>
  );
};
