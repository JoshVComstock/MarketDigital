import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { CustomIcon } from "./customIcon";
const CustomLink = ({
  href,
  children,
  icon,
  onClick,
  isCollapsed,
}: {
  href?: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
  isCollapsed?: boolean;
}) => {
  const theme = useTheme().theme;
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const linkClass = clsx(
    " flex items-center gap-2   p-3 rounded-3xl text-sm  transition-gap duration-300",
    {
      " justify-center ": !isCollapsed,
      "text-tx-light-500": theme === "LIGHT" && pathname !== href,
      "text-tx-dark-500": theme === "DARK" && pathname !== href,
      "border-transparent": !isHovered && pathname !== href,
      "border-r-2 border-tx-light-500/50 bg-linear-to-r from-transparent to-black/15":
        isHovered && theme === "LIGHT" && pathname !== href,
      "border-r-2 border-tx-dark-500/60 bg-linear-to-r from-transparent to-background-dark-500/50":
        isHovered && theme === "DARK" && pathname !== href,
      "border-r-2 border-primary-500 bg-linear-to-r from-transparent to-primary-500/30 text-tx-primary-500 rounded-l-none ":
        pathname === href && theme === "DARK",
      "border-r-2 border-primary-500 bg-linear-to-r from-transparent to-primary-500/50 text-tx-primary-700":
        pathname === href && theme === "LIGHT",
      "gap-3": isHovered,
    }
  );

  if (!href) {
    return (
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className={linkClass}
        type="button"
      >
        {icon && <CustomIcon icon={icon} />}
        {isCollapsed ? children : null}
      </button>
    );
  }

  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={href}
      className={linkClass}
      onClick={onClick}
    >
      {icon && <CustomIcon icon={icon} />}
      {isCollapsed ? children : null}
    </Link>
  );
};

export default CustomLink;
