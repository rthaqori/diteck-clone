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
  title: "Diteck - Digital Agency",
  description:
    "A clone site of Diteck, includes only the frontend part and basic animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-svh w-svw max-w-svw overflow-x-hidden bg-[#F2F1F6] bg-[url('/404-bg.png')] bg-cover bg-center bg-no-repeat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
