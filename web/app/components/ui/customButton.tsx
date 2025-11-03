"use client";

import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import { CustomIcon } from "../icons/icon";

export interface PropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
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
  const sizeStyles = clsx({
    "px-2 py-1 text-xs": size === "sm",
    "px-3 py-2 text-sm": size === "md",
    "px-4 py-3 text-base": size === "lg",
  });

  const baseStyles = clsx(
    "rounded-xl border flex items-center gap-2 cursor-pointer transition-all duration-200 ease-in-out",
    "justify-center overflow-hidden select-none",
    sizeStyles,
    {
      "bg-primary-900 border-primary-900 text-white hover:opacity-80":
        variant === "primary" && !disabled,
      "border-primary-100 bg-primary-100 text-primary-900 hover:bg-primary-500":
        variant === "secondary" && !disabled,
      "border-gray-200 text-primary-900 hover:border-primary-500":
        variant === "tertiary" && !disabled,
      "opacity-50 cursor-not-allowed": disabled,
      "justify-start": contentAling === "start",
      "justify-end": contentAling === "end",
      "justify-center": contentAling === "center",
    }
  );

  const labelStyles = clsx("truncate text-ellipsis whitespace-nowrap", {
    "text-white": variant === "primary",
  });

  return (
    <button className={baseStyles} disabled={disabled} {...props}>
      {icon && <CustomIcon icon={icon} size={18} />}
      {!iconOnly && label && (
        <span className={labelStyles} style={{ fontWeight: labelWeight }}>
          {label}
        </span>
      )}
    </button>
  );
};

export default CustomButton;
