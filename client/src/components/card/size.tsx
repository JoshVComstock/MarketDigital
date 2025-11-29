import { ProductVariant } from "./types/Props";
import { useTheme } from "@/context/ThemeContext";
import clsx from "clsx";

const Size = ({ size, stock, color }: ProductVariant) => {
  const { theme } = useTheme();

  const SizeClass = clsx(
    "w-8 h-8 flex justify-center items-center rounded-lg border  text-xs font-medium ",
    {
      "border-gray-200 text-gray-600": theme === "LIGHT",
      "border-white/10 text-white/70": theme === "DARK",
    }
  );

  if (stock > 0) {
    return <div className={SizeClass}>{size}</div>;
  }
  return null;
};

export default Size;
