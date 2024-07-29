"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname}  from "next/navigation" ; // Import useRouter
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import Footer from "@/components/Footer";
import ShimmerButton from "@/components/magicui/ShimmerButton";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={`bg-black ${inter.className}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}