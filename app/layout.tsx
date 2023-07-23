import type { Metadata } from "next";
import { Inter } from "next/font/google";

import AppProvider from "./Provider";
import NextAuthContext from "@/context/NextAuthContext";

import Sidebar from "@/components/sidebar/Sidebar";
import LoginModal from "@/components/layout/Modals/LoginModal";

import RegisterModal from "@/components/layout/Modals/RegisterModal";

import "./globals.css";
import ToasterContext from "@/context/ToasterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  creator: "Gautam Raj",
  publisher: "Gautam Raj",
  title: "Equal Reach | Home",
  applicationName: "Equal Reach",
  description:
    "Equal Reach aims to address social inequality and promote equal opportunities for all individuals, regardless of their background, gender, race, or socioeconomic status.",
  keywords: ["Equal Reach", "Equal", "Reach"],
  authors: [{ name: "Gautam Raj", url: "https://gautam-raj.vercel.app" }],

  icons: {
    shortcut: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
      {
        rel: "apple-touch-icon-180x180-precomposed",
        url: "/apple-touch-icon-180x180-precomposed.png",
      },
    ],
  },

  appleWebApp: {
    title: "Equal Reach",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthContext>
          <AppProvider>
            <ToasterContext />
            <RegisterModal />
            <LoginModal />
            <div className="mx-auto lg:max-w-7xl h-screen overflow-hidden grid gap-0  grid-cols-1 md:grid-desktop lg:gap-2">
              <Sidebar />
              <div>{children}</div>
            </div>
          </AppProvider>
        </NextAuthContext>
      </body>
    </html>
  );
}
