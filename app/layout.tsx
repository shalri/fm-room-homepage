import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const league_spartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Room Homepage | FScode",
  description:
    "A solution for the Room Homepage Challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${league_spartan.className} flex min-h-screen flex-col scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
