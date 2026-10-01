import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Setyo Pambudi | Corporate Innovator & Practical Problem Solver",
  description:
    "Portfolio Setyo Pambudi - Profesional korporat yang memecahkan masalah operasional sehari-hari dengan membangun solusi dan inovasi digital yang berguna.",
  keywords: [
    "Setyo Pambudi",
    "Corporate Innovator",
    "Problem Solver",
    "Business Automation",
    "Internal Tools",
    "Solutions Builder"
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-100 selection:bg-emerald-500 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
