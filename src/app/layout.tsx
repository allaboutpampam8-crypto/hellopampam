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
  metadataBase: new URL("https://hellopampam.vercel.app"),
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
    icon: "/icon.png?v=5",
    apple: "/icon.png?v=5",
  },
  openGraph: {
    title: "Setyo Pambudi | Corporate Innovator & Practical Problem Solver",
    description:
      "Turning Workplace Bottlenecks into Useful Digital Tools - Portfolio & Case Studies Setyo Pambudi.",
    url: "https://hellopampam.vercel.app",
    siteName: "Setyo Pambudi Portfolio",
    images: [
      {
        url: "/og-image.png?v=1",
        width: 1200,
        height: 630,
        alt: "Setyo Pambudi - Corporate Innovator & Practical Problem Solver",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Setyo Pambudi | Corporate Innovator & Practical Problem Solver",
    description:
      "Turning Workplace Bottlenecks into Useful Digital Tools - Portfolio & Case Studies Setyo Pambudi.",
    images: ["/og-image.png?v=1"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/icon.png?v=5" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png?v=5" />
        <meta property="og:image" content="/og-image.png?v=1" />
        <meta name="twitter:image" content="/og-image.png?v=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-100 selection:bg-emerald-500 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
