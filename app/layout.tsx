import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const league_spartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "次に(tsugini) | FScode",
  description: "A basic NextJS template for Frontend Mentor Challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${league_spartan.className} flex min-h-screen flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
