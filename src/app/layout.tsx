import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const expoArabic = localFont({
  src: "./fonts/ExpoArabic-Regular.woff",
  variable: "--font-expo-arabic",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Somu Portfolio",
  description: "Somu Portfolio built with Next.js",
  icons: "/Logo-Somu-Academy.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar"
      dir="rtl"
    >
      <body
        className={`${expoArabic.variable}antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
