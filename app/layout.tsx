import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WanderTools – Free Micro-Apps for Smart Travelers",
  description:
    "WanderTools is a suite of free tools for modern travelers, including visa checkers, safety alerts, and travel goal tracking.",
  keywords: [
    "travel tools",
    "visa checker",
    "travel advisories",
    "digital nomad utilities",
    "WanderTools",
  ],
  authors: [{ name: "Adrien Figard" }],
  creator: "Adrien Figard",
  openGraph: {
    title: "WanderTools – Lightweight Travel Utilities",
    description:
      "Explore WanderTools: fast, focused micro-apps for travelers. Visa info, safety alerts, and planning made simple.",
    url: "https://wandertools.vercel.app",
    siteName: "WanderTools",
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="fixed top-1/2 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        {children}
      </body>
    </html>
  );
}
