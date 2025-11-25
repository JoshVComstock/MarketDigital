"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import CustomLink from "../ui/customLink";
import { MenuItem } from "./constants/ITEMS";
import { useSidebarContext } from "./context/sidebarContext";

interface SidebarItemProps {
  item: MenuItem;
}

export const SidebarItem = ({ item }: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isCollapsed } = useSidebarContext();
  const hasChildren = item.children && item.children.length > 0;
  const handleToggle = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <CustomLink
        href={item.path}
        icon={item.icon}
        onClick={handleToggle}
        isCollapsed={isCollapsed}
      >
        <div className="flex items-center justify-between w-full">
          <span>{item.label}</span>
          {hasChildren && !isCollapsed && (
            <span>
              {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </span>
          )}
        </div>
      </CustomLink>

      {hasChildren && isOpen && !isCollapsed && (
        <div className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-2">
          {item.children?.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};
