import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "FarmIQ🌾",
  description: "FarmIQ🌾 is an innovative app designed to maximize your agricultural yield by Aashutosh Soni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

