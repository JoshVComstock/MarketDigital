"use client";

import clsx from "clsx";
import { Moon, PanelLeft, ShoppingCart, Sun } from "lucide-react";
import CustomButton from "../ui/customButton";
import { CustomIcon } from "../ui/customIcon";
import { useTheme } from "../../context/ThemeContext";
import { ITEM_SIDEBAR } from "./constants/ITEMS";
import { useSidebarContext } from "./context/sidebarContext";
export const Sidebar = () => {
  const { isCollapsed, toggleCollapsed } = useSidebarContext();
  const { theme, toggleTheme } = useTheme();
  const navClass = clsx(
    "min-h-screen flex  gap-4 relative transition-all duration-300 ",
    {
      "bg-background-light-300": theme === "LIGHT",
      "bg-background-dark-500": theme === "DARK",
      "w-[250px]": isCollapsed,
      "w-[100px]": !isCollapsed,
    }
  );
  const titleClass = clsx("text-xs ", {
    "text-black": theme === "LIGHT",
    "text-white": theme === "DARK",
  });

  const HeaderClass = clsx("flex items-center justify-between p-4");
  const NavItemClass = clsx("flex  flex-col gap-2");

  return (
    <nav className={navClass}>
      <section className="w-24 text-white flex items-center flex-col gap-4 p-4 border-r border-r-white/20 h-full">
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
          <div className="bg-linear-to-l from-transparent to-white/20 p-4 rounded-l-3xl text-white ">
            <CustomIcon icon={PanelLeft}></CustomIcon>
          </div>
        </div>
        <article>
          <div className="flex flex-col  gap-4">
            <CustomButton icon={ShoppingCart} variant="primary" label="Home" />
            <CustomButton
              icon={ShoppingCart}
              variant="secondary"
              label="Prueba"
            />
            <CustomButton
              icon={ShoppingCart}
              variant="tertiary"
              label="Prueba 1"
            />
          </div>

          {ITEM_SIDEBAR.map((category, index) => (
            <div key={index} className="p-4">
              <h3 className={titleClass}>{category.title}</h3>
              <ul className="flex flex-col  "></ul>
            </div>
          ))}
        </article>
      </section>
    </nav>
  );
};
