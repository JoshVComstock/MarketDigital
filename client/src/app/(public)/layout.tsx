"use client";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { useTheme } from "@/context/ThemeContext";
import clsx from "clsx";
const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const LatoutClass = clsx("flex", {
    "bg-background-light-500 text-tx-light-500": theme === "LIGHT",
    "bg-background-dark-500 text-tx-dark-500": theme === "DARK",
  });

  return (
    <section className={LatoutClass}>
      <Sidebar />
      <main>{children}</main>
    </section>
  );
};

export default PublicLayout;
