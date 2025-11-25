"use client";

import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import { CustomIcon } from "./customIcon";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

export interface PropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "focus-icon" | "gradiant";
  labelWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  label?: string;
  contentAling?: "start" | "end" | "center";
  disabled?: boolean;
  icon?: LucideIcon;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

const CustomButton = ({
  contentAling = "center",
  labelWeight = 500,
  variant = "primary",
  disabled = false,
  label,
  icon,
  iconOnly = false,
  size = "md",
  ...props
}: PropsButton) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const sizeStyles = clsx({
    "px-2 py-1 text-xs": size === "sm",
    "px-3 py-2 text-sm": size === "md",
    "px-4 py-3 text-base": size === "lg",
  });
  const contentAlingStyles = clsx({
    "justify-start": contentAling === "start",
    "justify-end": contentAling === "end",
    "justify-center": contentAling === "center",
  });

  const ButtonClass = clsx(
    "flex items-center gap-4 cursor-pointer transition-all duration-200 ease-in-out border rounded-3xl min-h-10 min-w-10",
    sizeStyles,
    contentAlingStyles,
    {
      "opacity-70 ": isHovered,

      "min-h-12 min-w-12": variant === "focus-icon",
      "rounded-full bg-white/10": variant === "focus-icon" && !disabled,
      " bg-primary-500 border-transparent": variant === "primary" && !disabled,
      "bg-primary-500/20 border-primary-500/30 text-primary-500":
        variant === "secondary" && !disabled && theme === "DARK",
      "bg-primary-500/30 border-primary-500":
        variant === "secondary" && !disabled && theme === "LIGHT",
      "text-primary-500 border-transparent bg-primary-500/10":
        variant === "tertiary" && !disabled && theme === "DARK",
      "text-gray-700 border-transparent bg-primary-500/20":
        variant === "tertiary" && !disabled && theme === "LIGHT",
      "rounded-3xl ": variant === "primary" && !disabled && theme === "LIGHT",
      "border-transparent": variant === "focus-icon" && theme === "DARK",
      "border-gray-300": variant === "focus-icon" && theme === "LIGHT",
      "bg-linear-to-l from-transparent to-white/15 p-4 rounded-l-3xl rounded-r-none text-white cursor-pointer border-transparent border-r-0":
        variant === "gradiant" && !disabled && theme === "DARK",
      "opacity-70": variant === "gradiant" && disabled,
      "bg-linear-to-l from-transparent to-black/15 p-4 rounded-l-3xl rounded-r-none text-black cursor-pointer border-transparent border-r-0":
        variant === "gradiant" && !disabled && theme === "LIGHT",
    }
  );
  const IconClass = clsx("border border-transparent", {
    "text-white": variant === "focus-icon" && !isHovered && theme === "DARK",
    "text-black": variant === "focus-icon" && !isHovered && theme === "LIGHT",
    "text-gray-300": variant === "focus-icon" && isHovered && theme === "DARK",
    "text-gray-700": variant === "focus-icon" && isHovered && theme === "LIGHT",
  });
  const labelStyles = clsx("truncate text-ellipsis whitespace-nowrap", {
    "text-white": variant === "focus-icon" && !isHovered && theme === "DARK",
    "text-black": variant === "focus-icon" && !isHovered && theme === "LIGHT",
    "text-gray-300": variant === "focus-icon" && isHovered && theme === "DARK",
    "text-gray-700": variant === "focus-icon" && isHovered && theme === "LIGHT",
  });

  return (
    <button
      className={ButtonClass}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {icon && <CustomIcon icon={icon} size={18} className={IconClass} />}
      {!iconOnly && label && (
        <span className={labelStyles} style={{ fontWeight: labelWeight }}>
          {label}
        </span>
      )}
    </button>
  );
};

export default CustomButton;
