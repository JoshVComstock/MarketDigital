"use client";

import clsx from "clsx";
import { Props } from "./props";
import { useTheme } from "@/context/ThemeContext";

const Wrapper = ({
  children,
  title,
  type = "MAIN",
  contentType = "COL",
  maxWhidh,
  hiddenMedia,
}: Props) => {
  const { theme } = useTheme();
  const WrapperClass = clsx("flex-1   p-4 rounded-xl ", {
    " bg-background-dark-300/40": theme === "DARK",
    " bg-background-dark-500": theme === "DARK" && type === "MAIN",
    " bg-background-light-500": theme === "LIGHT" && type === "MAIN",
    " bg-background-light-300": theme === "LIGHT",
    "hidden 2xl:flex": hiddenMedia === "2XL",
    "hidden xl:flex": hiddenMedia === "XL",
    "hidden lg:flex": hiddenMedia === "LG",
    "hidden sm:flex": hiddenMedia === "SM",
    "hidden md:flex": hiddenMedia === "MD",
  });
  const ContentContainerClass = clsx("flex flex-1 gap-4", {
    "flex-col": contentType === "COL",
    "flex-row": contentType === "ROW",
  });
  const TitleClass = clsx("text-2xl font-bold mb-2", {
    "text-white/80 flex-block": type === "MAIN" && theme === "DARK",
    "text-white/80": type === "MAIN-CONTENT" && theme === "DARK",
    "text-black/90": type === "MAIN-CONTENT" && theme === "LIGHT",
    "text-white/80 text-sm": type === "SECTION" && theme === "DARK",
    "text-black/90 text-sm": type === "SECTION" && theme === "LIGHT",
    "text-xs font-semibold border-l-2 px-2 border-l-gray-500/60 text-gray-500":
      type === "CHART" && theme === "DARK",
    "text-xs font-semibold border-l-2 px-2 border-l-gray-500 text-gray-500":
      type === "CHART" && theme === "LIGHT",
  });
  return (
    <section className={WrapperClass} style={{ maxWidth: maxWhidh }}>
      <h1 className={TitleClass}>{title}</h1>
      <div className={ContentContainerClass}>{children}</div>
    </section>
  );
};

export default Wrapper;
