import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";

const inter = Archivo_Black({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={` max-w-5xl mx-auto`}>{children}</body>
    </html>
  );
}
