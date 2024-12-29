import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import { cn, constructMetadata } from "@/lib/utils";
import Footer from "@/components/sections/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" overflow-x-hidden scroll-smooth">
      <body className={cn("grainy bg-white antialiased", inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
