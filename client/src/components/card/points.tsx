import { Star, StarHalf, StarOff } from "lucide-react";
import React from "react";
import { CustomIcon } from "../ui/customIcon";
import clsx from "clsx";
import { useTheme } from "@/context/ThemeContext";

const Points = ({ pints }: { pints: number }) => {
  const { theme } = useTheme();
  const fullStars = Math.floor(pints);
  const hasHalfStar = pints % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  const startClass = clsx({
    "text-yellow-600": theme === "LIGHT",
    "text-yellow-500": theme === "DARK",
  });
  return (
    <div className="flex gap-1">
      {Array.from({ length: fullStars }, (_, i) => (
        <CustomIcon icon={Star} key={i} className={startClass} />
      ))}
      {hasHalfStar && (
        <CustomIcon icon={StarHalf} key={fullStars} className={startClass} />
      )}
      {Array.from({ length: emptyStars }, (_, i) => (
        <CustomIcon icon={StarOff} key={fullStars + i} className={startClass} />
      ))}
    </div>
  );
};

export default Points;
