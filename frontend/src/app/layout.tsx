"use client";
import Sidebar from "@/components/Sidebar";
import Controller from "@/controller";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Controller>
        <body className={inter.className}>
          <Sidebar />
          {children}
        </body>
      </Controller>
    </html>
  );
}
