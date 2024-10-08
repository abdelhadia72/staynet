import type { Metadata } from "next";
import { Alata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alata.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
