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
  title:
    "Asian Bond – Innovative Construction Chemicals for Stronger Structures",
  description:
    "Explore Asian Bond’s high-performance range of construction chemicals—including waterproof wall putty, concrete floor hardeners, and curing compounds. ISO-certified quality trusted across India since 1985.",
  verification: {
    google: "nhWlRM6-aNNXHth6wKPIdIXWMe68bLdoMLg10dawdRc",
  },
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
        {children}
      </body>
    </html>
  );
}
