"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarPaths = ['/', "/important", "/planned", "/tags"]
  const [sidebarActive, setSidebarActive] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    setSidebarActive(sidebarPaths.includes('/' + pathname.split('/')[1]));
  }, [pathname]);

  return (
    <html lang="en">
      <body className={inter.className}>
        {sidebarActive && <Sidebar />}
        {children}
      </body>
    </html>
  );
}
