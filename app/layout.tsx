import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GreenERZY EcoTech | Building the Smart Circular Electronics Economy",
  description:
    "GreenERZY is building a technology-enabled ecosystem connecting the lifecycle of electronics — from creation and commerce to use, repair, reuse, recovery and resource regeneration.",
  keywords: [
    "Smart Circular Electronics Economy",
    "Digital Product Identity",
    "Digital Product Passport",
    "Electronics Lifecycle Management",
    "Resource Intelligence",
    "AI for Circular Economy",
    "GreenTech India",
    "CleanTech DeepTech",
  ],
  authors: [{ name: "GreenERZY EcoTech Pvt. Ltd." }],
  openGraph: {
    title: "GreenERZY EcoTech | Building the Smart Circular Electronics Economy",
    description:
      "Connecting products, people, businesses, resources and intelligence across the electronics lifecycle.",
    url: "https://greenerzy.com",
    siteName: "GreenERZY EcoTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenERZY EcoTech | The Future of Electronics Is Circular",
    description:
      "Lifecycle First. Waste Second. Resources Always. Building India's Smart Circular Electronics Economy.",
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body className="min-h-screen flex flex-col bg-[#06090A] text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
