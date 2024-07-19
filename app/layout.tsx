import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import { Kalam  } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({ 
  subsets: ["latin"],
  variable: "--font-caption",
 });

 const kalam = Kalam({ 
  subsets: ["latin"],
  variable: "--font-kalam",
  weight : "300",
 });

export const metadata: Metadata = {
  title: "Sarino Malalanirina . Software Engineer",
  description: "Developer Java, React, TailwindCSS, Next.js, and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable, AnekTelugu.variable, GeistMono.variable, kalam.variable, "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
