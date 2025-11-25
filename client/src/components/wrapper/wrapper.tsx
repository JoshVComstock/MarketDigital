"use client";

import clsx from "clsx";
import { Props } from "./props";
import { useTheme } from "@/context/ThemeContext";

const Wrapper = ({ children, title, type = "SECTION" }: Props) => {
  const { theme } = useTheme();
  const WrapperClass = clsx("w-full h-full flex-col gap-4 p-4 rounded-xl", {
    " bg-background-dark-300/40": theme === "DARK",
    " bg-background-light-300": theme === "LIGHT",
  });

  const TitleClass = clsx("text-2xl font-bold", {
    "text-white/80": type === "MAIN-CONTENT" && theme === "DARK",
    "text-black/90": type === "MAIN-CONTENT" && theme === "LIGHT",
    "text-white/80 text-lg  ": type === "SECTION" && theme === "DARK",
    "text-black/90 text-lg": type === "SECTION" && theme === "LIGHT",
    "text-xs font-semibold border-l-2 px-2 border-l-gray-500/60 text-gray-500":
      type === "CHART" && theme === "DARK",
    "text-xs font-semibold border-l-2 px-2 border-l-gray-500 text-gray-500":
      type === "CHART" && theme === "LIGHT",
  });
  return (
    <section className={WrapperClass}>
      <h1 className={TitleClass}>{title}</h1>
      {children}
    </section>
  );
};

export default Wrapper;
