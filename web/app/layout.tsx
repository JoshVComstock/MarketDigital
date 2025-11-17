import React from "react";
import "./globals.css";
import { SidebarContextProvider } from "./components/sidebar/context/sidebarContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SidebarContextProvider>{children}</SidebarContextProvider>
      </body>
    </html>
  );
}
