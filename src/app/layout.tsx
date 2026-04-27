import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shrey Naik | MERN Stack Engineer & Full Stack Developer",
  description: "Portfolio of Shrey Naik, a MERN Stack Engineer specializing in high-performance web applications and scalable architecture.",
  keywords: ["Shrey Naik", "MERN Stack", "Full Stack Developer", "Next.js", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Shrey Naik" }],
  openGraph: {
    title: "Shrey Naik | MERN Stack Engineer",
    description: "Building scalable web applications and mastering full-stack development",
    url: "https://shreynaik.dev",
    siteName: "Shrey Naik Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
