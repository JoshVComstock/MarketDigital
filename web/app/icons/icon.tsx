"use client";

import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface CustomIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  color?: string;
}

export const CustomIcon = ({
  icon: Icon,
  className,
  size = 24,
  color,
}: CustomIconProps) => {
  return (
    <Icon size={size} color={color} className={clsx("stroke-2", className)} />
  );
};
