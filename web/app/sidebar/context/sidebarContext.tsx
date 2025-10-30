"use client";

import { createContext, useState, ReactNode, useContext } from "react";

interface Props {
  children: ReactNode;
}

interface Ctx {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
}

export const SidebarContext = createContext<Ctx | null>(null);

export const SidebarContextProvider = ({ children }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsed = () => setIsCollapsed((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx)
    throw new Error(
      "useSidebarContext must be used within a SidebarContextProvider"
    );
  return ctx;
};
